# APT34 (Oilrig) Threat Intelligence and Defensive Strategy Report. 

### 1. Introduction

Datacom has commissioned this report following a cyberattack attributed to APT34, a well-known state-sponsored threat group. The purpose of this document is to investigate APT34’s profile, attack methods, and motives, while also assessing the potential impact on the client. Finally, the report outlines recommended security measures to strengthen the client’s defenses against future intrusions.  

### 2. Purpose

The purpose of this report is to provide a comprehensive and professional assessment of the identified APT34. It will summarize their history, state association, targeted industries, motives, and tactics, techniques, and procedures (TTPs). Additionally, the report will outline security measures the client can implement to defend against such attacks. The ultimate goal is to deliver clear, actionable insights to the client’s leadership team, enabling informed decisions that strengthen the organization’s overall security posture.

### Tools Used.  

-CyberScoop: https://www.cyberscoop.com/. 
-Dark Reading: https://www.darkreading.com/. 
-The CyberWire: https://thecyberwire.com/. 
-SecureWorks - https://www.secureworks.com/. 
-ThreatConnect - https://www.threatconnect.com. 
-Kaspersky Lab: https://www.kaspersky.com/. 
-Symantec Threat Intelligence: https://www.symantec.com/threat-intelligence.     
-MITRE ATT&CK: https://attack.mitre.org/. 

### History and Origin. 

APT34, active since at least 2014, is an Iranian state-linked cyber espionage group focused on reconnaissance in support of national interests. The group has targeted sectors such as finance, government, energy, chemical, and telecommunications, primarily in the Middle East. Its operations rely on spear phishing, social engineering, and custom malware. Past campaigns include distributing POWBAT via macro-enabled attachments (2016) and deploying the **POWRUNER** backdoor and **BONDUPDATER** downloader through malicious RTF files exploiting CVE-2017-0199 (2017).

### Target industries and Motives 

OilRig is a suspected Iranian threat group that has targeted Middle Eastern and international victims since at least 2014. The group has targeted a variety of sectors, including financial, government, energy, chemical, and telecommunications. It appears the group carries out supply chain attacks, leveraging the trust relationship between organizations to attack their primary targets. The group works on behalf of the Iranian government based on infrastructure details that contain references to Iran, use of Iranian infrastructure, and targeting that aligns with nation-state interests.

## Analysis

### Tactics, Techniques and Procedures.  

**1. Delivery.**

APT34, has used sophisticated techniques to enhance the effectiveness and stealth of its operations. The group has obtained stolen code signing certificates, allowing it to digitally sign malware, which makes malicious files appear legitimate and helps evade security defenses. During operations such as Outer Space, OilRig created Microsoft 365 email accounts to serve as part of its command-and-control infrastructure, providing a legitimate looking communication channel for malware. The group has also established fake VPN portals, conference registration sites, and job application websites to lure victims and collect credentials through social engineering. In its spear-phishing campaigns, APT34 has sent malicious .rtf attachments that exploit memory on the stack. The attack works by pushing malicious data onto the stack, then overwriting a function address with the address of an existing instruction. This overwritten instruction calls the WinExec function from kernel32.dll, which executes the malicious payload on the victim system, allowing the malware to run and establish further access. These techniques combine technical exploits with social engineering to maximize infiltration, persistence, and data exfiltration while minimizing detection.

**2. Persistence.** 

APT34 uses lightweight persisistence methods to maintain access while avoiding detection by running registry Run keys and Scheduled Tasks which used to execute malware like POWRUNNER automatically. Once executed it drops a secondary loaders that re-establish persistence, also used Webshells on Public servers to provide a long-term footholds and remote access.  

**3. Privilege Escalation.**

APT34 has been observed employing a range of techniques to escalate privileges within targeted networks, primarily leveraging common Windows exploitation methods. The group exploits known vulnerabilities, such as **CVE-2017-0199**, an Office/Word RTF exploit, to gain initial elevated access. Once inside, APT34 frequently uses **Mimikatz** to perform credential dumping, harvesting account credentials that are then used to pivot to higher-privileged accounts across the network. The attackers also engage in **token impersonation**, using stolen NTLM hashes or Kerberos tickets to assume the identity of privileged users and further escalate access. Additionally, APT34 has been known to deploy a **password filter DLL**, allowing them to intercept and manipulate password processes to maintain elevated privileges and persist within the environment.


**4. Defence Evasion.**  

APT34 places a strong emphasis on **defense evasion**, deliberately designing its operations to blend into normal network activity and avoid detection. By **using legitimate credentials** obtained through phishing or credential dumping, the group ensures that actions appear to come from authorized users, reducing suspicion. They extensively practice **Living off the Land (LotL)** techniques, leveraging built-in Windows tools such as **PowerShell** and **certutil** to execute malicious actions without introducing obvious new software, which helps them bypass security controls. Their payloads are often **obfuscated or encoded**, for example as Base64-encoded PowerShell scripts, making it harder for antivirus and monitoring tools to detect malicious code. APT34 also uses **custom loaders** like **BONDUPDATER**, which dynamically fetch and execute malware, further evading static detection. Finally, they employ **DNS-based command-and-control (C2)** channels, making their network communications appear as normal DNS queries and effectively hiding their command traffic within legitimate-looking network activity.
  
**5. Credential Access.**  

  APT34’s campaigns heavily focus on **credential theft** as a primary means to gain access and move within networks. The group uses **keylogging and credential dumping**, often via custom implants or tools like **Mimikatz**, to extract passwords, hashes, and authentication tokens directly from compromised systems. They also conduct **spear-phishing attacks**, sending emails that mimic legitimate corporate login portals to trick users into revealing their credentials. In addition, APT34 targets **Outlook Web Access (OWA)** and other webmail platforms to harvest valid account logins. Once credentials are obtained, they exploit **password reuse**, leveraging the same username-password combinations across multiple systems and services to expand access and maintain persistence within the target environment.   

**6. Lateral Movement.**  

  OilRig, also known as OilRig, engages in **lateral movement** to extend its access from an initial compromise to high-value systems within a network. The group often uses **Remote Desktop Protocol (RDP)** with stolen credentials to pivot to other machines. They also leverage **Windows Management Instrumentation (WMI)** and **PSExec** to execute payloads remotely without needing to install new software, which helps avoid detection. By stealing **VPN credentials**, they can access internal networks remotely and move deeper into corporate environments. Techniques like **Pass-the-Hash** and **Pass-the-Ticket** allow them to reuse harvested authentication tokens across domains, facilitating privilege escalation and lateral movement. APT34 has employed credential-dumping tools such as **LaZagne** to capture credentials from logged-in accounts and **Outlook Web Access (OWA)**, and **VALUEVAULT** to extract credentials stored in the Windows Credential Manager. Because these methods exploit **built-in system features**, which make them difficult to prevent with standard security controls.   

**7. Collection.**  

  APT34 focuses on collecting sensitive internal and geopolitical intelligence from compromised networks. The group targets valuable documents such as **policy papers, financial records, and engineering files**, often exfiltrating them from internal servers. They also perform **email harvesting** by exploiting access to **Outlook Web Access (OWA)** or Exchange servers to gather communications and credentials. To capture additional data, APT34 has deployed **keyloggers** such as **KEYPUNCH** and **LONGWATCH**. For secure exfiltration and communication, they use utilities like **Plink** and other tunneling tools to reach their command-and-control (C2) servers, while their malware, **ISMAgent**, can fallback to **DNS tunneling** if HTTP-based C2 connections fail. The group also leverages **remote monitoring and management (RMM) tools**, including **ngrok**, to maintain visibility and control over compromised systems. Additionally, backdoors like **Helminth** enable **screenshot capturing**, allowing APT34 to monitor user activity and gather further intelligence.  

  **8. Control and Command (C2).**  

  APT34 (OilRig) employs a variety of C2 mechanisms to maintain communication with compromised systems while evading detection. Their malware, such as **POWRUNER** and **BONDUPDATER**, often uses **DNS-based C2**, sending queries that appear as normal DNS traffic, making them difficult to block or detect. They also utilize **HTTP-based C2** channels for standard web traffic communication. To securely tunnel data and maintain connectivity, APT34 has leveraged utilities like **PowerExchange** and other tunneling tools to reach their C2 servers. Additionally, they use **Domain Generation Algorithms (DGA)** to frequently rotate domains, preventing defenders from successfully sinkholing or blocking malicious infrastructure. In some cases, OilRig has even used **public DNS tunneling services**, such as **requestbin.net**, to further obscure their communications and exfiltrate data without triggering conventional network defenses.

**9. Exfiltration.**  

OilRig has used multiple methods to exfiltrate stolen data from compromised networks, not relying solely on its primary C2 channels. In addition to DNS-based C2, which primarily handles communication and control, the group has directly transferred collected files using **Microsoft Exchange**, leveraging email systems to move sensitive information out of the network. They have also employed **FTP (File Transfer Protocol)** to upload data to external servers, providing an alternative exfiltration path. Using these separate channels allows APT34 to bypass security monitoring focused on their main C2 traffic, increase operational redundancy, and ensure successful data theft even if one method is detected or blocked.  

## Impact.  

- Sensitive internal documents, financial records, engineering files, and emails are exfiltrated, compromising organizational confidentiality.  
- Stolen credentials, including high-privilege accounts, allow attackers to move laterally, escalate privileges, and maintain persistent access.  
- Operational Disruption malware like POWRUNER and BONDUPDATER  interfered with normal system operations and enabled remote control of critical systems.  
- As an Iranian state-linked group, APT34’s intelligence gathering can support national objectives, potentially impacting regional security and decision-making.  
- Use of stealthy techniques, living-off-the-land tools, DNS-based C2, and encrypted channels makes attacks difficult to detect, increasing the time an attacker can remain undetected.    

### Mitigations. 

- **Adaptive Protection:** Intelligent, automated attack surface reduction without disruption of normal business operations. 
- **Application Control:** Discovery and control of risky applications, including detailed risk assessments and smart recommendations for administrators. 
- Active Directory security to defend the primary attack surface against lateral movement and domain administrator credential theft by controlling the attacker’s perception of an organization’s Active Directory resources using unlimited obfuscation. With obfuscation, the attacker gives itself away
by interacting with fake assets or attempting to use domain administrator credentials.  
- Implement ZTNA Threat Prevention by using Cloudnative, multi-layered threat inspection and detection for zero trust network access (ZTNA) connections. 
- Deploy advanced email filtering to block spear-phishing attempts and malicious attachments and also educate users to recognize phishing campaigns, including fake login portals.  
- Leveraging the powere of AI by matching it against the attack chains to predit an attacker next four to five moves with upto 100% confidence.   
- Leverage the power of AI to combine Indicators of Compromise (IOC) and historical anomalies to continously adapt endpoint policy thresholds or rules and keep up-to-date and aligned to risk profile of your organization.  
- Implementing Intrusion prevention systems and firewalls to block known network-based and browser-based malware attacks using rules and policies, and prevent command and control setup with automated domain IP address blacklisting.  
- Mitigate lateral movement by limiting RDP, segmenting networks, monitoring privilege use, and enforcing least privilege.
- To protect against data theft and exfiltration by APT34, organizations should monitor Outlook Web Access and Exchange activity for unusual or unauthorized data transfers, implement data loss prevention tools to detect and block the movement of sensitive files, and ensure that sensitive data is encrypted both at rest and in transit, reducing the risk of exposure even if attackers gain access to internal systems.


### Conclusion

APT34, also known as OilRig, is a highly sophisticated, state-sponsored cyber espionage group with a proven track record of targeting critical sectors, including finance, government, energy, and telecommunications, primarily in the Middle East. Its operations combine advanced technical exploits, such as malicious RTF attachments, malware like POWRUNER and BONDUPDATER, and credential-stealing tools like Mimikatz, with social engineering techniques, including spear-phishing and fake web portals, to gain initial access and maintain long-term persistence. The group employs stealthy methods for privilege escalation, lateral movement, defense evasion, and data exfiltration, using DNS and HTTP-based C2 channels, domain generation algorithms, and alternative exfiltration paths like Microsoft Exchange and FTP. Given the complexity and adaptability of APT34’s tactics, a layered defense strategy is essential, incorporating robust credential management, phishing awareness, network segmentation, endpoint monitoring, data loss prevention, encryption, and AI-driven threat detection. By implementing these mitigations, organizations can reduce their exposure, detect intrusions more effectively, and strengthen resilience against future attacks from highly capable threat actors like APT34.



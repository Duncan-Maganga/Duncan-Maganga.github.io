# Phishing Email Simulation – Risk Management Approach. 

This is a real simulation for risk management flow for any ancidence that happens in our workplace.

## 1. Risk Identification. 

You discover a suspicious email in your inbox. You recognize this as a potential phishing attempt, which poses risks such as:  

- Credential theft if someone enters their login on a fake page.  
- Malware infection if an attachment is opened.  
- Business disruption if multiple employees fall victim.  

At this point, you’ve identified the risk of an active phishing email targeting you and possibly others in your organization.  

## 2. Risk Assessment

As the SOC analyst, this is the you now assess the following from the threat:    

- You analyze headers and trace the sender’s IP.  
- You sandbox suspicious links and attachments.  
- You compare Indicators Of Compromise (IOC) against threat intelligence feeds.    
- You assess if therem could be severe if credentials or systems are compromised.   

Based on this, you classify the phishing email as a high-risk or low incident to determine if is there is any agent steps to be taken.   

## 3. Risk Response Planning. 

At this stage you decide on the best strategy to use depending on the seriousness. 

- Quarantine the email from all inboxes to stop user interaction this serves as a preventave measure.
- Block sender domain/IP, strengthen email filters, and warn users as a way of mitigation.
- Prepare to reset passwords, isolate devices, and remove malware if anyone clicked.
- At this point plan your communication strategies by notifying all the employees where they have recieved the email or not, and escalate the issue to the management if compromise is confirmed. 

## 4. Response Implementation.  

At this point now you execute your plan. These can include the following:

- Quarantine the email across the mail server.  
- Block the malicious IP/domain at the firewall and proxy.   
- Notify users to not click or interact with the email.   
- And if investigation shows a user clicked the link you immediately reset their credentials and review the activity.  
- If a device executed a malicious file you isolate thr endpoint using the EDR and perform forensic scanning.    
- You push Indicators Of Compromise into SIEM and SOAR tools so future attempts are automatically blocked.    

## 5. Monitor and Assess Results. 

You continue monitoring for signs of compromise by ensuring everything is working and ensuring that the following are kept in check.  

- Check SIEM, proxy, DNS, and endpoint logs for outbound traffic to attacker infrastructure.  
- Watch for repeated attempts from the same campaign.  

This can be verified when there is no futher employees interact with similar email in future, ensure that block rules are working as expected and if policy needs to be updated, or there be need for more training to be done. 




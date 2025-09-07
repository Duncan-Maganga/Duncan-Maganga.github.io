# Phishing Simulation With Gophish  

## 1. Introduction  

This project involved setting up and running a phishing simulation using the Gophish framework. The goal was to understand how phishing campaigns are created, deployed, and tracked, while also identifying common issues that arise during configuration and testing. The exercise was conducted in a controlled and ethical environment for research and training purposes..


## 2. Purpose of the Project 

- Provide a detailed record of the phishing simulation workflow, tools, and configurations used.  
- Highlight technical challenges encountered during setup and the solutions implemented.  
- Demonstrate the effectiveness of phishing simulations in identifying vulnerabilities in email security and user awareness.  
- Serve as a reference for refining future phishing campaigns, improving training materials, and enhancing organizational defenses against phishing threats.  


## 3. Tools Used  

- **Gophish Framework:** Used for creating, managing, and launching phishing campaigns.    
- **Web Browser:** Used to interact with the Gophish dashboard and access the landing pages.  
- **Custom HTML Code:** Handwritten fake login pages for credential harvesting simulations.  
- **SMTP Server (Gmail-based):** For sending phishing emails.  
- **Bash:** For server setup, IP configuration, and network testing.

## 4. Methodoloy

### 4.1 Setup  

Start the gophish    
```
wget https://github.com/gophish/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-64bit.zip  
```

Unzip the contents of file inside the gophish binary 

```
unzip gophish-v0.12.1-linux-64bit.zip
```
Moves the extracted folder so you can access the files inside it.  
```
cd gophish-v0.12.1-linux-64bit
```
make the file executable  
```
chmod +x gophish
```
Run the program  
```
./gophish
```
### 4.2 Ip Address Used  

**Phishing Host IP Address:** https://127.0.0.1:3333
 This IP was used to host the phishing landing pages and serve the HTML content to targets.

- You will be given a default password which you must change the password in the first time.
  
![sreenshot](images/password.png)

### 4.2 Gmail SMTP server configuration  

In your gmail account, on the search bar **App password** 

![screenshot](images/project/gmail.png)  

Gmail will redirect you to enter your password for confirmation, and for you to get the temporary password you must have authenticated your email with phone no or Authenticator App.  

![screnshot](images/project/gmail1.png)  

### 4.3 Sending Profile  

On the sending profile I used gmail SMTP server and port   
```
smtp.gmail.com:587
```
![screenshot](images/project/sending.png)  

When in the password you enter the one time password provided by gmail and save the profile.

![screenshot](images/project/gmail1.png)  

### 4.4 Landing Page  

I made a basic **HTML** landing page resembling exactly gmail login page to capture **email** and **password,** and the target user logs in the credentials are captured and they will be redirected to the real gmail page making it look real and unnoticed.  

![screenshot](images/project/login.png)  

### 4.5 Email Template  

For the email template I used the source for the original email, this ensures it carries all the features of the email reducing the chances of target user to know the phish email.  

![screenshot](images/phone.jpeg)  

### 4.6 Setting the Target  

I made a small list of email to send Phishing email, you can also import in bulk.  

![screenshot](images/project/group.png)  

### 4.7 Creating campaigns  

During campaign launch, the IP address configured should be the local IP of your Kali system.

![screenshot](images/project/camp.png)  

### 4.8 Results  

Phishing email was sent successful to all the target users and click they clicked entering thier credentials.  

![sreenshot](images/project/report1.png)  

The results were as shown below four of target users submitted their credentials.    

![screenshot](images/project/report2.png)  

This is sample of credentials captured, user **email** and **password** were captured.  

![screenshort](images/password2.png)  

## 5. Importance of running regular Internal Phishing campaings  

In todays world social engineering is the widely used method to penetrate through systems in our organizations, making human being the most vulnerable player in the system. This project helps in the following ways.  

1. **Measure Human Risk:** Helps identify how many employees are likely to click a malicious link or enter credentials. This shows which departments or roles are more vulnerable.  
2. **Raise Security Awareness:** Employees see firsthand how convincing phishing emails can look, and also reinforces training by turning theory into experience.  
3. **Build a Security Culture:** Encourages staff to think twice before clicking suspicious emails.  
4. **Improve Incident Response:** Teaches employees how and when to report phishing attemptsand also helps security teams test monitoring and response workflows.  
5. **Demonstrate Compliance:** Simulation results provide evidence of ongoing risk managementas many regulations such as  **HIPAA** require security awareness training.  
6. **Reduce Real Attacks’ Success Rate:** The more employees are trained through simulations, the less likely real attackers succeed.  


## 6. Common mistakes Organization make when running Phishing Simulation  

1. **Making Emails Too Obvious:**  If every simulated phishing email looks fake (bad spelling, unrealistic sender), employees catch on too easily, this gives a false positive, because real attacks are far more polished.  
2. **Making Emails Too Difficult:** Some simulations are so realistic that almost everyone fails. This demotivates employees and creates resentment, instead of teaching them.  
3. **No Training After the Test:** Running a simulation without follow-up training misses the point. Employees who click don’t learn why they fell for it or how to avoid it next time.  
4. **Publicly Shaming Employees:** Calling out or punishing staff who click links creates fear. This discourages people from reporting real phishing later (they’d rather hide mistakes).  
5. **Using the Same Templates Over and Over:** If staff see the same email every 3 months, they’ll memorize it, this doesn’t reflect how attackers change tactics.  
6. **Not Tracking Metrics That Matter:** Only looking at click rates misses the bigger picture, as a Opsec you need to measure reporting rates, time-to-click, and repeat offenders too.    
7. **Exercise Mentality:** Some organizations run phishing tests once a year, phishing is evolving everyday, so constantly training should be ongoing and adaptive.  

## 7. Remediatons  

1. **Continous User Awareness Training -** Conduct regular cybersecurity awareness sessions to educate employees about phishing indicators such as suspicious links, unexpected login prompts, and urgent language.  
2. Conduct exercises where employees practice identifying and reporting phishing attempts this improves awereness among emplyoees.    
3. Ensure employees know how to report suspicious messages quickly and in timely manner.    
4. Enable multi-factor authentication (MFA) for all critical systems to reduce the impact of credential theft and malicious login.  
5. Configure email filtering and anti-phishing rules such as SPF, DKIM, and DMARC to block spoofed or malicious emails.  
6. Deploy EDR such as CrowdStrike Falconto combine with SIEM such as Splunk and QRadar to detect abnormal login attempts or credential use.  
7. Deliver specialized training to high-risk groups such as executives, finance, and HR who are frequent phishing targets.  
8. Provide immediate learning opportunities for employees who fall for a simulation with short videos, and quick guides to avoid repeting the same mistake.  

## 8. Conclusion   

- This project successfully demonstrated the setup and execution of a phishing campaign using the Gophish framework. The simulation revealed how easily crafted phishing emails and landing pages can trick users into revealing sensitive information. It highlighted the critical role of human factors in cybersecurity and the importance of continuous training and awareness.  
- Awareness training and simulations are essential to build resilience against real-world phishing attacks and also combining technical defenses such as MFA, email filtering with human-focused training creates a stronger overall defense. Phishing simulations are not just tests, they are learning opportunities. When implemented correctly, they reduce organizational risk, strengthen the security culture, and help ensure compliance with regulatory requirements.  

  




  *In my next phishing simulation project, I will use a custom domain with custom email addresses, Evilginx, and a paid SMTP server to create a more realistic scenario.*








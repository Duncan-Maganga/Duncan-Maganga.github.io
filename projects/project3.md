# Secure File Sharing System.  


## Introduction.  


The Secure File Sharing System project involved designing and implementing a robust platform that allows users to safely upload and download files while ensuring confidentiality, integrity, and secure data transfer. Built primarily with Python Flask, the system integrates AES-256-GCM encryption, key management, and modern testing tools to create a secure environment for file handling. In today’s digital landscape, where cyber threats are increasingly sophisticated, secure file sharing is a critical component of organizational cybersecurity strategy.    


## Purpose of the Project.  



The purpose of this project was to provide a reliable, secure, and user-friendly system for exchanging sensitive data, reducing the risk of unauthorized access, data leaks, and cyber attacks. It demonstrates how modern businesses across healthcare, finance, and legal sectors can implement strong confidentiality and integrity measures while maintaining usability for end-users.   


## Methodology.  


- **System Development:** Built a Flask backend with HTML front-end templates for file uploads and downloads.  
- **Encryption:** Implemented AES-256-GCM encryption for files at rest and in transit, ensuring authentication and confidentiality.  
- **Key Management:** Utilized master keys to wrap randomly generated Data Encryption Keys (DEKs) for each file.  
- **Global Access Testing:** Used Ngrok to simulate secure remote access.  
- **API and Integrity Testing:** Tested endpoints with Postman and curl, and verified file integrity using SHA-256 checksums.  
- **Architecture:** Designed using the CIA triad principles—Confidentiality, Integrity, and Availability.   


## Importance to Modern Business.  


In today’s environment, data is a critical business asset, and unauthorized access or breaches can result in financial loss, reputational damage, or regulatory penalties. Secure file sharing systems:  

- Protect sensitive data from interception or unauthorized access.  
- Enable businesses to safely collaborate with remote employees and partners.  
- Demonstrate compliance with security standards and regulations such as GDPR or HIPAA.  
- Reduce the risk of insider threats and cyberattacks targeting file repositories.  


## Remediations.  


To mitigate these risks, the following measures are recommended:  

- Implement centralized key management systems (KMS) with regular key rotation.  
- Enforce strong authentication and role-based access controls.  
- Conduct continuous security testing including penetration testing, fuzzing, and automated vulnerability scans.  
- Enforce file type validation, size limits, and malware scanning on uploads.  
- Use HTTPS/TLS for all transmissions and secure backup procedures for encrypted files.  
- Maintain detailed audit logs for uploads, downloads, and tampering for forensic and compliance purposes.    


## Common Mistakes Organizations Make. 


- **Neglecting Key Management:** Storing static encryption keys or hardcoding them in applications.  
- **Weak Authentication:** Allowing file access without robust authentication or access control.  
- **Insufficient Testing:** Failing to validate file integrity, encryption, and API security.  
- **Ignoring Large File Risks:** Not enforcing file size limits or rate limiting, which can lead to DoS attacks.  
- **Unsecured Transmission:** Transferring files over unsecured channels without HTTPS/TLS.  
- **Overlooking File Validation:** Allowing malicious files to be uploaded without scanning.    


## Conclusion. 


The Secure File Sharing System successfully demonstrates a practical and secure approach to managing sensitive data. By integrating encryption, key management, secure APIs, and testing, the system minimizes business risk while enabling safe collaboration. In modern business, where data breaches can have severe financial and reputational impacts, implementing secure file sharing solutions is not optional, it is a business imperative. This project emphasizes that security must be embedded in the architecture, workflows, and culture of any organization handling sensitive information.



*View the full project on GitHub*
---
title: "Web Application Vulnerability Assessment Report"

categories:
  - Blog
tags:
  - Post Formats
  - quote
---

**Project Title:** Web Application Vulnerability Assessment (DVWA)  
**Date:** August 2025    
**Skills Used:** OWASP ZAP, SQLMap, Manual Testing, OWASP Top 10   

### Overview:
I conducted a vulnerability assessment on Damn Vulnerable Web Application (DVWA) to simulate real-world penetration testing in a controlled lab environment.

Methodology:

- Set up DVWA on Kali Linux with MariaDB and Apache2.  
- Ran automated scans with OWASP ZAP and Nikto.  
- Performed manual testing for SQL Injection and XSS.  
- Mapped findings to the OWASP Top 10.  

**Findings:**

- **SQL Injection (High Severity):** Allowed bypass of login authentication and retrieval of user credentials.  
- **Reflected XSS (High Severity):** Enabled execution of malicious scripts via unsanitized user input.
- **Clickjacking:** Managed to overlay fake buttons to trick users. 


**Mitigations for SQL Injection:**

- Use of Prepared Statements (with Parameterized Queries).  
- Use of Properly Constructed Stored Procedures.  
- Allow-list Input Validation. 

**Mitigations for Reflected for XSS:**

- Use the auto-escaping template system.  
- Implement content security policy.  
- Use the X-XSS-Protection response header.  
- Use the HTTPOnly flag.   
- Use HTML escape before inserting untrusted data into an HTML element’s content.  
- Use attribute escape before inserting untrusted data into HTML element content.  
- Use JavaScript escape before inserting untrusted data into JavaScript data values.  
- Use CSS escape and strictly validate before inserting untrusted data into HTML style property values.  
- Use URL escape before inserting untrusted data into HTML UTL parameter values.

**Mitigations for Clickjacking:**

- Use secure response headers on X-Frame-Options and Content Security Policy.  
- Use frame bursting as a secondary layer.  
- Use Design-level defence, such as double-click confirmation, user interaction, and visual cues.


Check out my project on [GitHub](https://github.com/Duncan-Maganga/FUTURE_CS_001).




Full Report & Technical Details: [Link to GitHub repo]Only one thing is impossible for God: To find any sense in any copyright law on the planet.
  
> <cite><a href="http://www.brainyquote.com/quotes/quotes/m/marktwain163473.html">Mark Twain</a></cite>

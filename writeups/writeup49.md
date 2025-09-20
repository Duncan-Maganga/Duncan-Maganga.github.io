# Forensic Information Gathering. 

When an incident occurs in an organization, people responsible must know how to respond. An organization needs to develop an incident response plan and put together a Computer Security Incidence Response Team (CSIRT) to manage the response. In this writeup I will be showing how to gather information and review logs after an incident has occurred. By doing this immediately after the incident is important because any data residing in RAM will be gone when the system is shut down.  

## Step by step guide. 

### Collect volatile information of the compromised sytem.  

The first thing to do is to create a file which can be saved or stored, this file can be used when evidence is needed for analysis. This report can be shared and transferred to a USB drive, emailed, or uploaded to a cloud server to preserve the information. Then the system can be taken down.  

- 1.1 Create a file 

Switch to the root and create a new file using **echo** commmand, creat a heading for your newly created file and enter **cat** to view the new file. 

![sreenshort](hashcat/imagesw/images49/report1.png). 

- 1.2 Enter the date command and redirect the date and timestamp to the **Investigation_Report.txt** file. Be sure to use the double angle brackets **>>** to append to the Investigation Report file, otherwise you will replace the previous content. 
To better document the content stored in the report, use echo commmand to add a subheading, do this to each step when entering new subheading before you gather information.   

![sreenshort](hashcat/imagesw/images49/report2.png)

- 1.3 uname command.  
Use the **uname** command to print the system information, use **-a** option to append all the system information to your report file.

![sreenshot](hashcat/imagesw/images49/report3.png)

- 1.4 Enter the **ifconfig -a** to append all network interface information to your report file.  Also use **netstat** command to collect all the network statistics. Enter the command with the options **-ano** to collect data on all sockets(-a), IP address istead of domains names (-n), and information related to to networking times (-o). Then append the output to the report file.

![sreenshot](hashcat/imagesw/images49/report4.png)

- 1.4 Use the **ps** command to report a snapshot of the running processes of the running system. Enter the command with the options **-axu** to list every process running on the system (-a and -x) and in a user-oriented format (-u). Append the output to the report file.

![screenshot](hashcat/imagesw/images49/aux.png)

- 1.5 Route the routing table currently used in the system, enter the command with the option **-n** to the list IP addresses insted of trying to determine host names, then append the output to your report file.

![sreenshot](hashcat/imagesw/images49/routing.png)

- 1.6 Lastly enter the date command and append the date and timestamp to the file to complete the report.

![screenshot](hashcat/imagesw/images49/date2.png)

- 1.7 Using the **cat** command to and pipe to the less to view your report file one page or line at a time. Press **spacebar** to scroll down by page or press **Enter** to scroll dowm by single line. Type **q** to when finshed.  

![sreenshot](hashcat/imagesw/images49/result1.png)
![sreenshot](hashcat/imagesw/images49/result2.png)
![sreenshot](hashcat/imagesw/images49/result3.png)

### 2. Analyze diffrent log files.  

When analysing logs give more attention to **auth.log** as these logs the system authorizaton information, **btmp.log** as these logs failed attempts and **wtmp.log** these logs who is currently into the system.

- 2.1 Use the **cat** command and pipe it to **less** command. Press **spacebar** to scroll down by a page or press **Enter** to scroll down by a single line. Type **q** to quit.  

![sreenshot](hashcat/images/images49/authlog.png)



# Azure Firewall. 

### Lab scenario. 
You have been asked to install Azure Firewall. This will help your organization control inbound and outbound network access which is an important part of an overall network security plan. Specifically, you would like to create and test the following infrastructure components:  
- A virtual network with a workload subnet and a jump host subnet.  
- A virtual machine in each subnet.  
- A custom route that ensures all outbound workload traffic from the workload subnet must use the firewall.  
- Firewall Application rules that only allow outbound traffic to www.bing.com.  
- Firewall Network rules that allow external DNS. 

**Lab objectives**. 
In this lab, you will complete the following exercise:  
- Exercise 1: Deploy and test an Azure Firewall. 
Azure Firewall diagram. 

![sreenshot](../imagesw/images45/1.png).

**Instructions.**
Lab files:  
- **\Allfiles\Labs\08\template.json**

Exercise 1: Deploy and test an Azure Firewall  
Estimated timing: 40 minutes   

For all the resources in this lab, we are using the East (US) region. Verify with your instructor this is the region to use for your class.  
In this exercise, you will complete the following tasks:
- Task 1: Use a template to deploy the lab environment.
- Task 2: Deploy an Azure firewall.
- Task 3: Create a default route.
- Task 4: Configure an application rule.
- Task 5: Configure a network rule.
- Task 6: Configure DNS servers.
- Task 7: Test the firewall.

### Task 1: Use a template to deploy the lab environment.
In this task, you will review and deploy the lab environment.  

In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Deploy a custom template and press the Enter key.  
1. On the Custom deployment blade, click the Build your own template in the editor option.

![sreenshot](../imagesw/images45/2.png).

2.	On the Edit template blade, click Load file, locate the \Allfiles\Labs\08\template.json file and click Open.
On the Edit template blade, **click Save.**  
1.	On the Custom deployment blade, ensure that the following settings are configured (leave any others with their default values):


**Click Review + create, and then click Create.**  

### Task 2: Deploy the Azure firewall

In this task you will deploy the Azure firewall into the virtual network.  
1.	In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Firewalls and press the Enter key.  

![sreenshot](../imagesw/images45/3.png).  

2.	On the Firewalls blade, click + Create.  
3.	On the Basics tab of the Create a firewall blade, specify the following settings:  

In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Resource groups and press the Enter key.  
1.	On the Resource groups blade, in the list of resource group, click the **AZ500LAB08** entry.  

In the list of resources, click the entry representing the Test-FW01 firewall.  
1.	On the Test-FW01 blade, identify the Private IP address that was assigned to the firewall.  

![sreenshot](../imagesw/images45/4.png).  

### Task 3: Create a default route. 
In this task, you will create a default route for the Workload-SN subnet. This route will configure outbound traffic through the firewall.
1.	In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Route tables and press the Enter key.  
2.	On the Route tables blade, click + Create.  
3.	On the Create route table blade, specify the following settings:  

![sreenshot](../imagesw/images45/5.png). 

Click Review + create, then click Create, and wait for the provisioning to complete.  
1.	On the Route tables blade, click Refresh, and, in the list of route tables, click the Firewall-route entry.  
2.	On the Firewall-route blade, in the Settings section, click Subnets and then, on the Firewall-route | Subnets blade, click + Associate.  
3.	On the Associate subnet blade, specify the following settings:  

![sreenshot](../imagesw/images45/6.png). 

Ensure the Workload-SN subnet is selected for this route, otherwise the firewall won't work correctly.  

Click OK to associate the firewall to the virtual network subnet.  
1.	Back on the Firewall-route blade, in the Settings section, click Routes and then click + Add.  
2.	On the Add route blade, specify the following settings:  

![sreenshot](../imagesw/images45/7.png).

Azure Firewall is actually a managed service, but virtual appliance works in this situation.  

### Task 4: Configure an application rule
In this task you will create an application rule that allows outbound access to www.bing.com.  
1.	In the Azure portal, navigate back to the Test-FW01 firewall.  
2.	On the Test-FW01 blade, in the Settings section, click Rules (classic).  
3.	On the Test-FW01 | Rules (classic) blade, click the Application rule collection tab, and then click + Add application rule collection.  
4.	On the Add application rule collection blade, specify the following settings (leave others with their default values):  
On the Add application rule collection blade, create a new entry in the Target FQDNs section with the following settings (leave others with their default values). 

![sreenshot](../imagesw/images45/8.png).

Click Add to add the Target FQDNs-based application rule.  
Azure Firewall includes a built-in rule collection for infrastructure FQDNs that are allowed by default. These FQDNs are specific for the platform and can't be used for other purposes.  

### Task 5: Configure a network rule. 
In this task, you will create a network rule that allows outbound access to two IP addresses on port 53 (DNS).  
1.	In the Azure portal, navigate back to the Test-FW01 | Rules (classic) blade.   
2.	On the Test-FW01 | Rules (classic) blade, click the Network rule collection tab and then click + Add network rule collection.  
3.	On the Add network rule collection blade, specify the following settings (leave others with their default values):  

![sreenshot](../imagesw/images45/9.png).

Click Add to add the network rule.  
The destination addresses used in this case are known public DNS servers.   

### Task 6: Configure the virtual machine DNS servers. 
In this task, you will configure the primary and secondary DNS addresses for the virtual machine. This is not a firewall requirement.  
1.	In the Azure portal, navigate back to the AZ500LAB08 resource group.  
2.	On the AZ500LAB08 blade, in the list of resources, click the Srv-Work virtual machine.  
3.	On the Srv-Work blade, click Networking.  
4.	On the Srv-Work | Networking Settings blade, click the link next to the Network interface entry.  

![sreenshot](../imagesw/images45/10.png).

5.	On the network interface blade, in the Settings section, click DNS servers, select the Custom option, add the two DNS servers referenced in the network rule: 209.244.0.3 and 209.244.0.4, and click Save to save the change.  

![sreenshot](../imagesw/images45/10.png).

Return to the Srv-Work virtual machine page.  
Wait for the update to complete.  

Updating the DNS servers for a network interface will automatically restart the virtual machine to which that interface is attached, and if applicable, any other virtual machines in the same availability set.  

### Task 7: Test the firewall
In this task, you will test the firewall to confirm that it works as expected.
1.	In the Azure portal, navigate back to the AZ500LAB08 resource group.
2.	On the AZ500LAB08 blade, in the list of resources, click the Srv-Jump virtual machine.
3.	On the Srv-Jump blade, click Connect and, in the drop down menu, click Connect.

![sreenshot](../imagesw/images45/11.png).  

4.	Download the RDP file and use it to connect to the Srv-Jump Azure VM via Remote Desktop. When prompted to authenticate, provide the following credentials:  

![sreenshot](../imagesw/images45/12.png).  

The secure password you chose during deployment of the custom template in task 1 step 6.  
The following steps are performed in the Remote Desktop session to the Srv-Jump Azure VM.  
You will connect to the Srv-Work virtual machine. This is being done so we can test the ability to access the bing.com website.  


Within the Remote Desktop session to Srv-Jump, right-click Start, in the right-click menu, click Run, and, from the Run dialog box, run the following to connect to Srv-Work.  

![sreenshot](../imagesw/images45/13.png).  


The secure password you chose during deployment of the custom template in task 1 step 6.  
Wait for the Remote Desktop session to be established and the Server Manager interface to load.  

![sreenshot](../imagesw/images45/14.png).  

![sreenshot](../imagesw/images45/15.png).


Within the Remote Desktop session to Srv-Work, start Internet Explorer and browse to https://www.bing.com.  
The website should successfully display. The firewall allows you access.  

![sreenshot](../imagesw/images45/16.png).

Within the browser page, you should receive a message with text resembling the following: 
**HTTP request from 10.0.2.4:xxxxx to microsoft.com:80. Action: Deny. No rule matched. Proceeding with default action.**
This is expected, since the firewall blocks access to this website.   

![sreenshot](../imagesw/images45/17.png). 

Terminate both Remote Desktop sessions.  
Result: You have successfully configured and tested the Azure Firewall.  









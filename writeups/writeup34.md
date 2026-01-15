# Cloud Security Specialist CSS (AZ-500).  

## Role-Based Access Control.    

**Lab scenario**

You have been asked to create a proof of concept showing how Azure users and groups are created. Also, how role-based access control is used to assign roles to groups. Specifically, you need to:
- Create a Senior Admins group containing the user account of Joseph Price as its member.  
- Create a Junior Admins group containing the user account of Isabel Garcia as its member.  
- Create a Service Desk group containing the user account of Dylan Williams as its member.  
- Assign the Virtual Machine Contributor role to the Service Desk group.  

### Lab objectives
In this lab, you will complete the following exercises:
- Exercise 1: Create the Senior Admins group with the user account Joseph Price as its member (the Azure portal).
- Exercise 2: Create the Junior Admins group with the user account Isabel Garcia as its member (PowerShell).
- Exercise 3: Create the Service Desk group with the user Dylan Williams as its member (Azure CLI).
- Exercise 4: Assign the Virtual Machine Contributor role to the Service Desk group.  

Role-Based Access Control architecture diagram

![sreenshot](../imagesw/images34/1.png)

In this exercise, you will complete the following tasks:
- Task 1: Use the Azure portal to create a user account for Joseph Price.
- Task 2: Use the Azure portal to create a Senior Admins group and add the user account of Joseph Price to the group.

![sreenshot](../imagesw/images34/2.png)

### Task2: Use the Azure portal to create a Senior Admins group and add the user account of Joseph Price to the group.

In the Azure portal, navigate back to the blade displaying your Microsoft Entra ID tenant.
1.	In the Manage section, click Groups, and then select + New group.
2.	On the New Group blade, specify the following settings (leave others with their default values):
Click the No owners selected link, on the Add owners blade, select Joseph Price, Joseph-57940691@LODSPRODMCA.onmicrosoft.com and click Select.

![sreenshot](../imagesw/images34/3.png)

Click the No members selected link, on the Add members blade, select Joseph Price, Joseph-57940691@LODSPRODMCA.onmicrosoft.com and click Select.
1.	

### Exercise 2: Create a Junior Admins group containing the user account of Isabel Garcia as its member.  

1. Task 1: Use PowerShell to create a user account for Isabel Garcia.
2. Task 2: Use PowerShell to create the Junior Admins group and add the user account of Isabel Garcia to the group.

### Task 1: Use PowerShell to create a user account for Isabel Garcia.  

In this task, you will create a user account for Isabel Garcia by using PowerShell.
1.	Open the Cloud Shell by clicking the Cloud Shell icon in the top-right corner of the Azure portal.
2.	If prompted, select No storage account required, select the name of your subscription, and then select Apply. This is required only the first time you launch the Cloud Shell.
3.	In the Cloud Shell pane, ensure PowerShell is selected from the drop-down menu in the upper-left corner. (Note: In the new Cloud Shell, this will say: -->Switch to Bash). 

In the PowerShell session within the Cloud Shell pane, run the following to create a password profile object:

In the PowerShell session within the Cloud Shell pane, run the following to create a password profile object:

$passwordProfile = New-Object -TypeName Microsoft.Open.AzureAD.Model.PasswordProfile
1.	In the PowerShell session within the Cloud Shell pane, run the following to set the value of the password within the profile object:

```
$passwordProfile.Password = "Pa55w.rd1234"
```

2.	In the PowerShell session within the Cloud Shell pane, run the following to connect to Microsoft Entra ID:

```
Connect-AzureAD
```

3.	In the PowerShell session within the Cloud Shell pane, run the following to identify the name of your Microsoft Entra tenant: 

```
$domainName = ((Get-AzureAdTenantDetail).VerifiedDomains)[0].Name
````

4.	In the PowerShell session within the Cloud Shell pane, run the following to create a user account for Isabel Garcia:
Step 7 is for reference only, and can be skipped as this user has already been created for you. If you wish, you may run the command but you will receive the error New-AzureADUser: Error occurred while executing NewUser. This is expected in this Cloudslice lab and you may proceed to the next Step.
```
New-AzureADUser -DisplayName 'Isabel Garcia' -PasswordProfile $passwordProfile -UserPrincipalName "Isabel@$domainName" -AccountEnabled $true -MailNickName 'Isabel'
```

5.	In the PowerShell session within the Cloud Shell pane, run the following to list Microsoft Entra ID users (the accounts of Joseph and Isabel should appear on the listed):

```
Get-AzureADUser -All $true | Where-Object {$_.UserPrincipalName -like "Isabel-57940691*"}
````

![sreenshot](../imagesw/images34/4.png)

### Task2: Use PowerShell to create the Junior Admins group and add the user account of Isabel Garcia to the group.
In this task, you will create the Junior Admins group and add the user account of Isabel Garcia to the group by using PowerShell.
1. In the same PowerShell session within the Cloud Shell pane, run the following to create a new security group named Junior Admins:
powershellTypeCopy
New-AzureADGroup -DisplayName 'Junior Admins5794069157940691' -MailEnabled $false -SecurityEnabled $true -MailNickName JuniorAdmins

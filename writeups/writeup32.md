# Cloud Security Specialist CSS (AZ-500).  

## Service Endpoints and Securing Storage

Lab scenario
You have been asked to create a proof of concept to demonstrate securing Azure file shares. Specifically, you want to:
- Create a storage endpoint so traffic destined to Azure Storage always stays within the Azure backbone network.
- Configure the storage endpoint so only resources from a specific subnet can access the storage.
- Confirm that resources outside of the specific subnet cannot access the storage.
For all the resources in this lab, we are using the East US region. Verify with your instructor this is the region to use for class.
Lab objectives
In this lab, you will complete the following exercise:
•	Exercise 1: Service endpoints and security storage

Service Endpoints and Securing Storage diagram
![sreenshot](../imagesw/images32/1.png)

### Exercise 1: Service endpoints and security storage. 

In this exercise, you will complete the following tasks:
- Task 1: Create a virtual network
- Task 2: Add a subnet to the virtual network and configure a storage endpoint
- Task 3: Configure a network security group to restrict access to the subnet
- Task 4: Configure a network security group to allow rdp on the public subnet
- Task 5: Create a storage account with a file share
- Task 6: Deploy virtual machines into the designated subnets
- Task 7: Test the storage connection from the private subnet to confirm that access is allowed
- Task 8: Test the storage connection from the public subnet to confirm that access is denied

### Task 1: Create a virtual network

In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Virtual networks and press the Enter key.
1. On the Virtual Networks blade, click + Create.
2. On the Basics tab of the Create virtual network blade, specify the following settings (leave others with their default values) and click Next: IP Addresses:

![sreenshot](../imagesw/images32/2.png)

On the IP addresses tab of the Create virtual network blade, set the IPv4 address space to 10.0.0.0/16, in the Subnet name column, click default and, on the Edit subnet blade, specify the following settings and click Save:

![sreenshot](../imagesw/images32/3.png)

```md
| Setting               | Value        |
|-----------------------|--------------|
| Subnet name           | Public       |
| Subnet address range  | 10.0.0.0/24  |
```

1. Back on the IP addresses tab of the Create virtual network blade, click Review + create.
2. On the Review + create tab of the Create virtual network blade, click Create.

### Task 2: Add a subnet to the virtual network and configure a storage endpoint

In this task, you will create another subnet and enable a service endpoint on that subnet. Service endpoints are enabled per service, per subnet.
1. In the Azure portal, navigate back to the Virtual Networks blade.
2. On the Virtual networks blade, click the myVirtualNetwork entry.
3. On the myVirtualNetwork blade, in the Settings section, click Subnets.
4. On the myVirtualNetwork | Subnets blade, click + Subnet.
5. On the Add subnet blade, specify the following settings (leave others with their default values):

![sreenshot](../imagesw/images32/4.png)

On the Add subnet blade, click Add.  
The virtual network now has two subnets: Public and Private.  

### Task 3: Configure a network security group to restrict access to the subnet. 

```
In this task, you will create a network security group with two outbound security rules (Storage and internet) and one inbound security rule (RDP). You will also associate the network security group with the Private subnet. This will restrict outbound traffic from Azure VMs connected to that subnet.
```

1. In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Network security groups and press the Enter key.
2. On the Network security groups blade, click + Create.
3. On the Basics tab of the Create network security group blade, specify the following settings:

![sreenshot](../imagesw/images32/5.png)

On the Add outbound security rule blade, click Add to create the new outbound rule.
1. On the myNsgPrivate blade, in the Settings section, click Outbound security rules, and then click + Add.
2. On the Add outbound security rule blade, specify the following settings to explicitly deny outbound traffic to Internet (leave all other values with their default settings):

![sreenshot](../imagesw/images32/6.png)

This rule overrides a default rule in all network security groups that allows outbound internet communication.

```
In the next steps, you will create an inbound security rule that allows Remote Desktop Protocol (RDP) traffic to the subnet. The rule overrides a default security rule that denies all inbound traffic from the internet. Remote Desktop connections are allowed to the subnet so that connectivity can be tested in a later step.
```

On the myNsgPrivate blade, in the Settings section, click Inbound security rules and then click + Add.
1. On the Add inbound security rule blade, specify the following settings (leave all other values with their default values):

![sreenshot](../imagesw/images32/7.png)

On the Add inbound security rule blade, click Add to create the new inbound rule.

```
Now you will associate the network security group with the Private subnet. You will need to click Subnets 
in MyNSGPrivate and then click +Associate.
```

1. On the Subnets blade, select + Associate and specify the following settings in the Associate subnet section and then click OK:

![sreenshot](../imagesw/images32/8.png)

### Task 4: Configure a network security group to allow rdp on the public subnet 

In this task, you will create a network security group with one inbound security rule (RDP). You will also associate the network security group with the Public subnet. This will allow RDP access to the Public VM.

1. In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Network security groups and press the Enter key.
2. On the Network security groups blade, click + Create.
3. On the Basics tab of the Create network security group blade, specify the following settings:

![sreenshot](../imagesw/images32/9.png)

Click Review + create and then click Create.

In the next steps, you will create an outbound security rule that allows communication to the Azure Storage service.
1. In the Azure portal, navigate back to the Network security groups blade and click the myNsgPublic entry.
2. On the myNsgPublic blade, in the Settings section, click Inbound security rules and then click + Add.
3. On the Add inbound security rule blade, specify the following settings (leave all other values with their default values):

```md
| Setting                  | Value            |
|--------------------------|------------------|
| Source                   | Any              |
| Source port ranges       | *                |
| Destination              | Service Tag      |
| Destination service tag  | VirtualNetwork   |
| Destination port ranges  | 3389             |
| Protocol                 | TCP              |
| Action                   | Allow            |
| Priority                 | 1200             |
| Name                     | Allow-RDP-All    |
```
![sreenshot](../imagesw/images32/10.png)

On the Add inbound security rule blade, click Add to create the new inbound rule.  

Now you will associate the network security group with the Public subnet.  
1.	On the Subnets blade, select + Associate and specify the following settings in the Associate subnet section and then click OK:

```md
| Setting          | Value              |
|------------------|--------------------|
| Virtual network  | myVirtualNetwork   |
| Subnet           | Public             |
```

![sreenshot](../imagesw/images32/11.png)

## Task 5: Create a storage account with a file share

In this task, you will create a storage account with a file share and obtain the storage account key.
1. In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Storage accounts and press the Enter key.
2. On the Storage accounts blade, click + Create.

![sreenshot](../imagesw/images32/12.png)

3. On the Basics tab of the Create storage account blade, specify the following settings (leave others with their default values):

```md
| Setting               | Value                                                                 |
|-----------------------|-----------------------------------------------------------------------|
| Subscription          | The Azure subscription used for this lab                               |
| Resource group        | AZ500LAB12                                                            |
| Storage account name  | Globally unique name (3–24 characters, letters and digits only)       |
| Location              | (US) East US                                                          |
| Performance           | Standard (general-purpose v2 account)                                 |
| Redundancy            | Locally redundant storage (LRS)                                       |
```
4. On the Basics tab of the Create storage account blade, click Review, wait for the validation process to complete, and click Create.

![sreenshot](../imagesw/images32/13.png)

Wait for the Storage account to be created. This should take about 2 minutes.

5. In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Resource groups and press the Enter key.
6. On the Resource groups blade, in the list of resource group, click the AZ500LAB12 entry.
7. On the AZ500LAB12 resource group blade, in the list of resources, click the entry representing the newly created storage account.
8. On the storage account Overview blade, click File Shares under the Data storage tab, and then click + File Share.

![sreenshot](../imagesw/images32/14.png)

9. On the New file share blade, untick the Enable backup option in the backup tab.

![sreenshot](../imagesw/images32/15.png)

10.	On the New file share blade, specify the following settings:

```md
| Setting | Value       |
|---------|------------|
| Name    | my-file-share |
```

![sreenshot](../imagesw/images32/16.png)

11. On the New file share blade, click Create.
Now, retrieve and record the PowerShell script that creates a drive mapping to the Azure file share.
12.	On the storage account blade, in the list of file shares, click my-file-share.
13.	On the my-file-share blade, click Connect.
14.	On the Connect blade, on the Windows tab, copy the PowerShell script that creates a Z drive mapping to the file share.

![sreenshot](../imagesw/images32/17.png)

Record this script. You will need this in a later in this lab in order to map the file share from the Azure virtual machine on the Private subnet.
15.	Navigate back to the storage account blade, then in the Security + networking section, click Networking.
16.	Under Public network access select Manage and as Default action select Enable from selected networks.
17.	Under Resource settings: Virtual networks, IP adresses, and exceptions blade, select view and click the + Add existing virtual network link.

![sreenshot](../imagesw/images32/18.png)

18.	On the Add networks blade, specify the following settings:

| Setting          | Value                                           |
|-----------------|------------------------------------------------|
| Subscription     | the name of the Azure subscription you are using in this lab |
| Virtual networks | myVirtualNetwork                               |
| Subnets          | Private                                        |

19.	On the Add networks blade, click Add.
20.	Back on the storage account blade, click Save.
At this point in the lab you have configured a virtual network, a network security group, and a storage account with a file share.


### Task 6: Deploy virtual machines into the designated subnets 

In this task, you will create two virtual machines one in the Private subnet and one in the Public subnet.
The first virtual machine will be connected to the Private subnet.  
1. In the Azure portal, in the Search resources, services, and docs text box at the top of the Azure portal page, type Virtual machines and press the Enter key.
2. On the Virtual machines blade, click + Create and, in the dropdown list, click Virtual machine
3. On the Basics tab of the Create a virtual machine blade, specify the following settings (leave others with their default values):

![sreenshot](../imagesw/images32/19.png)

| Setting                         | Value                                                                 |
|---------------------------------|-----------------------------------------------------------------------|
| Subscription                    | The Azure subscription used in this lab                               |
| Resource group                  | AZ500LAB12                                                            |
| Virtual machine name            | myVmPrivate                                                           |
| Region                          | (US) East US                                                          |
| Image                           | Windows Server 2022 Datacenter: Azure Edition – Gen 2                 |
| Username                        | Student                                                               |
| Password                        | Personal password created in Lab 02 > Exercise 2 > Task 1 > Step 3    |
| Public inbound ports            | None                                                                  |
| Windows Server license          | Not selected                                                          |

For public inbound ports, we will rely on the precreated NSG.
4. Click Next: Disks > and, on the Disks tab of the Create a virtual machine blade, set the OS disk type to Standard HDD and click Next: Networking >.

![sreenshot](../imagesw/images32/20.png)

5. Click Next: Networking >, on the Networking tab of the Create a virtual machine blade, specify the following settings (leave others with their default values):

![sreenshot](../imagesw/images32/21.png)

```md
| Setting                     | Value                     |
|-----------------------------|---------------------------|
| Virtual network             | myVirtualNetwork          |
| Subnet                      | Private (10.0.1.0/24)     |
| Public IP                   | (new) myVmPrivate-ip      |
| NIC network security group  | None                      |
```
6.	Click Next: Management >, on the Management tab of the Create a virtual machine blade, accept the default settings and click Review + create.
7.	On the Review + create blade, ensure that validation was successful and click Create.
The second virtual machine will be connected to the Public subnet.
8.	On the Virtual machines blade, click + Add and, in the dropdown list, click Virtual machine.
9.	On the Basics tab of the Create a virtual machine blade, specify the following settings (leave others with their default values):

```md
| Setting                         | Value                                                                 |
|---------------------------------|-----------------------------------------------------------------------|
| Subscription                    | The Azure subscription used in this lab                               |
| Resource group                  | AZ500LAB12                                                            |
| Virtual machine name            | myVmPublic                                                            |
| Region                          | (US) East US                                                          |
| Image                           | Windows Server 2022 Datacenter: Azure Edition – Gen 2                 |
| Username                        | Student                                                               |
| Password                        | Personal password created in Lab 02 > Exercise 1 > Task 1 > Step 9    |
| Public inbound ports            | None                                                                  |
| Windows Server license          | Not selected                                                          |
```
For public inbound ports, we will rely on the precreated NSG.

![sreenshot](../imagesw/images32/22.png)

10.	Click Next: Disks > and, on the Disks tab of the Create a virtual machine blade, set the OS disk type to Standard HDD and click Next: Networking >

![sreenshot](../imagesw/images32/23.png)

11.	Click Next: Networking >, on the Networking tab of the Create a virtual machine blade, specify the following settings (leave others with their default values):

![sreenshot](../imagesw/images32/24.png)

```md
| Setting                     | Value                    |
|-----------------------------|--------------------------|
| Virtual network             | myVirtualNetwork         |
| Subnet                      | Public (10.0.0.0/24)     |
| Public IP                   | (new) myVmPublic-ip      |
| NIC network security group  | None                     |
```
12.	Click Next: Management >, on the Management tab of the Create a virtual machine blade, accept the default settings and click Review + create.
13.	On the Review + create blade, ensure that validation was successful and click Create.
You can continue to the next task once the deployment of the myVMPublic Azure VM is completed.
Task 7: Test the storage connection from the private subnet to confirm that access is allowed
In this task, you will connect to the myVMPrivate virtual machine via Remote Desktop and map a drive to the file share.
1.	Navigate back to the Virtual machines blade.
2.	On the Virtual machines blade, click the myVMPrivate entry.
3.	On the myVMPrivate blade, click Connect and, in the drop down menu, click Connect.

![sreenshot](../imagesw/images32/25.png)

4.	Download the RDP file and use it to connect to the myVMPrivate Azure VM via Remote Desktop. When prompted to authenticate, provide the following credentials:

![sreenshot](../imagesw/images32/26.png)

| Setting  | Value   |
|----------|---------|
| Username | Student |
| Password |         |

Please use your personal password created in Lab 02 > Exercise 2 > Task 1 > Step 3.

Wait for the Remote Desktop session to open and Server Manager to load.  
You will now map drive Z to an Azure File share within the Remote Desktop session to a Windows Server 2022 computer
5.	Within the Remote Desktop session to myVMPrivate, click Start and then click Windows PowerShell ISE.
6.	Within the Windows PowerShell ISE window, open the Script pane, then paste and run the PowerShell script that you recorded earlier in this lab. The script has the following format:

![sreenshot](../imagesw/images32/27.png)


The (storage_account_key) placeholder represents the name of the storage account hosting the file share and <storage_account_key> one its primary key

7. Start File Explorer and verify that the Z: drive mapping has been successfully created.
8. Next, from the console pane of the Windows PowerShell ISE console, run the following to verify that the virtual machine has no outbound connectivity to the internet:

```
Test-NetConnection -ComputerName www.bing.com -Port 80
```

The test will fail because the network security group associated with the Private subnet does not allow outbound access to the internet.
9. Terminate the Remote Desktop session to the myVMPrivate Azure VM.
At this point, you have confirmed that the virtual machine in the Private subnet can access the storage account.
Task 8: Test the storage connection from the public subnet to confirm that access is denied
1. Navigate back to the Virtual machines blade.
2. On the Virtual machines blade, click the myVMPublic entry.
3. On the myVMPublic blade, click Connect and, in the drop down menu, click Connect.
4. Click Connect via RDP and use it to connect to the myVMPublic Azure VM via Remote Desktop. When prompted to authenticate, provide the following credentials:

```md
| Setting  | Value                                                                 |
|----------|-----------------------------------------------------------------------|
| Username | Student                                                               |
| Password | Personal password created in Lab 02 > Exercise 2 > Task 1 > Step 3    |
```

Wait for the Remote Desktop session to open and Server Manager to load.

You will now map drive Z to an Azure File share within the Remote Desktop session to a Windows Server 2022 computer
5. Within the Remote Desktop session to myVMPublic, click Start and then click Windows PowerShell ISE.
6. Within the Windows PowerShell ISE window, open the Script pane, then paste and run the same PowerShell script that you ran within the Remote Desktop session to the myVMPrivate Azure VM.

![sreenshot](../imagesw/images32/28.png)

This time, you will receive the New-PSDrive : Access is denied error.  
Access is denied because the myVmPublic virtual machine is deployed in the Public subnet. The Public subnet does not have a service endpoint enabled for the Azure Storage. The storage account only allows network access from the Private subnet.

![sreenshot](../imagesw/images32/29.png) 

1.	Next, from the console pane of the Windows PowerShell ISE console, run the following to verify that the virtual machine has outbound connectivity to the internet:

```
Test-NetConnection -ComputerName www.bing.com -Port 80
```
![sreenshot](../imagesw/images32/30.png)

The test will succeed because there is no outbound security rule to deny internet on the Public subnet.
8. Terminate the Remote Desktop session to the myVMPublic Azure VM.
At this point, you have confirmed that the virtual machine in the Public subnet cannot access the storage account, but has access to the internet.

**December 09, 2025**


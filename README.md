# Agrochemicals  Distribution Optimizer 

This section discusses the methodologies used to create and implement the Agrochemicals Distribution Optimizer, with a focus on the use of a fractional knapsack optimization algorithm, the design of a distribution service, and the integration of these components into a functional system via the MERN stack. The methodology is broken down into four major components: system design and architecture, algorithm development, data gathering and preprocessing, and distribution service design.

# main features


Add and update warehouse locations, capacities and distances from main warehouse and provide required fertilizer amount for each month (CRUD). 

Fertilizer usage request handling. 

Fertilizer Requirement Prediction and store and manage monthly distribution ratios. 

Distribution handling and execution with map. 

Distribution status tracking using QR code and notification handling. 

Generate reports using cost analysis and distribution. 


# Add and update warehouse locations, capacities and distances from main warehouse and provide required fertilizer amount for each month (CRUD).

Create: Allow users (e.g., Warehouse Managers) to input new warehouse data, including location, capacity, and distance from the main warehouse.

Read: Retrieve and view existing warehouse data, helping users understand the distribution network's structure.

Update: Modify existing warehouse data when there are changes in capacity, location, or distance.

Delete: Remove warehouse entries that are no longer in use.

Provide Required Fertilizer Amount for Each Month: Based on the stored warehouse data and predicted fertilizer needs, the system calculates and provides the required amount of fertilizers for each warehouse on a monthly basis.
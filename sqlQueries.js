//1. Find the average length of all tracks in Milliseconds
//SELECT AVG(Milliseconds) FROM Track

//2. Find the number of invoices in the USA
//SELECT COUNT(*) FROM Invoice WHERE BillingCountry IS 'USA'

//3. Make a list of all the First Names of Customers that contain an 'a'
//SELECT * FROM Customer WHERE FirstName LIKE '%a%'

//4. Make a list of the 10 longest tracks
//SELECT * FROM Track ORDER BY Milliseconds DESC LIMIT 10

//5. Make a list of the 20 shortest tracks
//SELECT * FROM Track ORDER BY Milliseconds LIMIT 20

//6. Find all the customers that live in California or Washington
//SELECT * FROM Customer WHERE State IS 'WA' OR State IS 'CA'

//7. Find all the customers that live in California, Washington, Utah, Florida, or Arizona (Use IN keyword)
//SELECT * FROM Customer WHERE State IN('WA', 'CA', 'UT', 'FL', 'AZ')

//8. Insert an artist to the database
//INSERT INTO Artist (ArtistId, Name)
//VALUES (276, 'Daniel Moore: The Darkness');

//9. Insert yourself as a customer to the database
//INSERT INTO Customer (CustomerId, FirstName, LastName, Company, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId)
//VALUES (60, 'Daniel', 'Moore', 'Infinisource', '1475 E 1370 S', 'Provo', 'UT', 'USA', '84606', '(206) 755-0015', null, 'dmoore1525@gmail.com', 3)

//10. Find a list of all Playlists that start with `Classical` 
//SELECT * FROM Playlist WHERE Name LIKE '%Classical%'
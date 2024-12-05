Feature: Greeting

		Scenario Outline: Go to google page and search Effie then view this page and take screenshot
		Given I go to google page and search with "<searchText>" 
		Then the Effie page is displayed and I click on the link
		When the page is fully displayed
		Then I verify the Logo and take screenshot
		When I verify the Hamberger icon and click on it 
		Then X button is displayed
		When I scroll to botton of the page 
		Then I verify the copywright text



		 Examples:
          | searchText    	  |
          | Elfie             | 
       
       

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(year + " est une année bissextile.");
    } else {
      console.log(year + " n'est pas une année bissextile.");
    }
  }
  
 

  function ticketPricing(age) {
    if (age <= 12) {
      console.log("Le prix du billet est de 10 $.");
    } else if (age >= 13 && age <= 17) {
      console.log("Le prix du billet est de 15 $.");
    } else {
      console.log("Le prix du billet est de 20 $.");
    }
  }
  


  function fibonacci(n) {
    if (n <= 1) {
      return n; // Cas de base : 0 ou 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Cas récursif
  }


  function isPalindrome(str) {
    // Supprimer les espaces, ponctuation et convertir en minuscules
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Cas de base : si la chaîne est vide ou ne contient qu'un caractère
    if (str.length <= 1) {
      return true;
    }
  
    // Vérification des caractères aux extrémités
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    // Appel récursif pour le sous-ensemble central de la chaîne
    return isPalindrome(str.slice(1, str.length - 1));
  }
 




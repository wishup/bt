angular.module('starter.services', [])

.factory('Language', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var language = new Array();
	
	language["category"] = new Array();
	language["category"]["am"] = "Բաժին";
	language["category"]["ru"] = "Категория";
	language["category"]["en"] = "Category";
	
	language["city"] = new Array();
	language["city"]["am"] = "Քաղաք";
	language["city"]["ru"] = "Город";
	language["city"]["en"] = "City";
	
	language["region"] = new Array();
	language["region"]["am"] = "Շրջան";
	language["region"]["ru"] = "Регион";
	language["region"]["en"] = "Region";
	
	language["search"] = new Array();
	language["search"]["am"] = "Որոնել";
	language["search"]["ru"] = "Поиск";
	language["search"]["en"] = "Search";
	
	language["keyword"] = new Array();
	language["keyword"]["am"] = "Որոնում";
	language["keyword"]["ru"] = "Поиск";
	language["keyword"]["en"] = "Search";
	
	language["restaurants"] = new Array();
	language["restaurants"]["am"] = "Ռեստորաններ";
	language["restaurants"]["ru"] = "Рестораны";
	language["restaurants"]["en"] = "Restaurants";
	
	language["cart"] = new Array();
	language["cart"]["am"] = "Զամբյուղ";
	language["cart"]["ru"] = "Корзина";
	language["cart"]["en"] = "Cart";
	
	language["profile"] = new Array();
	language["profile"]["am"] = "Անձնական էջ";
	language["profile"]["ru"] = "Личный кабинет";
	language["profile"]["en"] = "Profile";
	
	language["language"] = new Array();
	language["language"]["am"] = "Լեզու";
	language["language"]["ru"] = "Язык";
	language["language"]["en"] = "Language";
	
	language["settings"] = new Array();
	language["settings"]["am"] = "Կարգավորումներ";
	language["settings"]["ru"] = "Настройки";
	language["settings"]["en"] = "Settings";
	

  return {
    all: function() {
      return language;
    },
    get: function(language_slug, lang) {
      if( typeof language[ language_slug ][ lang ] != 'undefined' ){
		  return language[ language_slug ][ lang ];
	  }
      return null;
    }
  };
});

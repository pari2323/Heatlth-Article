//  create an instance of XMLHttpRequest object of java script
var xhr = new XMLHttpRequest(); // var xhr of xhr object instance created
// created a var url and assigned to the path of json file
var url = './healthArticle.json';
debugger;
xhr.open('GET',url,true); // GET indicates https request method, url is path
//  true for asynchronus operations and false for synchronus operations

xhr.responseType = 'json'; // Telling that xhr object that response expected tobe of json type

//  Need to define what to do after data loaded on xhr.ONLOAD by function

xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById("articles");
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add("article");

        var title = document.createElement("h2");
        title.textContent = article.title;

        var description = document.createElement("p")
        description.textContent = article.description ;

        var waysHeader = document.createElement("h3");
        waysHeader.textContent = "Ways To Acheive";

        var wayList = document.createElement("ul");
        article.ways_to_achieve.forEach(function(way){
            var listItem = document.createElement ("li");
            listItem.textContent = way ;
            wayList.appendChild(listItem);        
        })

        var benefitsHeader = document.createElement("h3");
        benefitsHeader.textContent = "Benefits:" ;

        var benefitList = document.createElement("ul");
        article.benefits.forEach(function(benefit){
            var listItem = document.createElement("li")
            listItem.textContent = benefit ;
            benefitList.appendChild(listItem);
        })

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(wayList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitList);
    
        articlesDiv.appendChild(articleDiv);


    });
}

xhr.send();
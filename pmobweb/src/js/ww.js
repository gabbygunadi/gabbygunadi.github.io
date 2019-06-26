self.onmessage = function(e) {
    var tipe = e.data[0];
    var country ="";
    var category = "";
    if(tipe == 1 || tipe == 3){
        country= e.data[1];
    }else if(tipe == 2){
        category=e.data[1];
    }
    var arr = new Array();
    var hasil="";

    console.log("Country : " + country);
    console.log("Category : " + category);
    if(tipe == 1){
        fetch("https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=19240ce75a9c4669acbc4c027e63eb50").then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (var i = 0; i < 7; i++) {
                var link_img = data.articles[i].urlToImage;
                var source_name = data.articles[i].source.name
                if(source_name == "Telset.id" || source_name == "Bloomberg" || source_name == "Youtube.com" ||source_name == "Merdeka.com" || source_name == "Bola.net" || source_name == "Batutimes.com" ||source_name == "Haibunda.com" || source_name == "Kapanlagi.com" || source_name == "Brilio.net" || source_name == "detik.com" || source_name == "Detik.com" || link_img == "" || link_img == "null"){
                    link_img = "src/img/noimage.jpg";
                }
                

                if(i == 0){
                    hasil +='<div class="col-sm-12">';
                    hasil +='<a href="'+data.articles[i].url+'" style="color:black; text-decoration:none;" target="_blank">';
                    hasil +='<div class="nd2-card" style="max-width:100%; width:100%;">';
                    hasil +='<div class="card-media">';
                    hasil +='<img src="'+link_img+'" onerror="';
                    hasil+= "this.onerror='src/img/noimage.jpg;'";
                    hasil+= '">';
                    hasil += '<div class="card-media-overlay with-background">';
                    hasil +='<div class="card-title has-supporting-text">';
                    hasil +='<h3 class="card-primary-title">'+data.articles[i].title +'</h3>';
                    hasil +='<h5 class="card-subtitle">'+data.articles[i].source.name+' &nbsp; &#183; &nbsp; '+data.articles[i].publishedAt+'</h5>';
                    hasil +='</div>';
                    hasil +='</div>';
                    hasil +='</div>';
                    hasil +='</div>';
                    hasil +='</a>';
                    hasil +='</div>';
    
                    arr.push(hasil);
                    hasil = '';
                }else{
                    hasil += '<li style="list-style:none; border: 1px solid; margin-bottom:1%;">';
                    hasil += '<a href="'+data.articles[i].url+'" style="text-decoration: none;">';
                    hasil += '<div class="row" style="margin: 5px;">';
                    hasil += '<div class="col-xs-8">';
                    hasil += '<h4>'+data.articles[i].title +'</h4>';
                    hasil += '<p style="color:black;">'+data.articles[i].source.name+' &nbsp; &#183; &nbsp; '+data.articles[i].publishedAt+'</p>';
                    hasil += '</div>';
                    hasil += '<div class="col-xs-4"><img src="'+link_img+'" style="width: 100%;"/></div>';
                    hasil += '</div>';
                    hasil += '</a>';
                    hasil += '</li>';
                }
            }
            arr.push(hasil);
            postMessage(arr);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    
    else if(tipe == 2){
        console.log("Masuk 2");
        fetch("https://newsapi.org/v2/top-headlines?country=id&category="+category+"&apiKey=19240ce75a9c4669acbc4c027e63eb50").then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (var i = 0; i < data.articles.length; i++) {
                var link_img = data.articles[i].urlToImage;
                var source_name = data.articles[i].source.name
                if(source_name == "Telset.id" || source_name == "Bloomberg" || source_name == "Youtube.com" || source_name == "Merdeka.com" || source_name == "Bola.net" || source_name == "Batutimes.com" || source_name == "Haibunda.com" || source_name == "Kapanlagi.com" || source_name == "Brilio.net" || source_name == "detik.com" || source_name == "Detik.com" || link_img == "" || link_img == "null"){
                    link_img = "src/img/noimage.jpg";
                }
                
                hasil += '<li style="list-style:none; border: 1px solid; margin-bottom:1%;">';
                hasil += '<a href="'+data.articles[i].url+'" style="text-decoration: none;">';
                hasil += '<div class="row" style="margin: 5px;">';
                hasil += '<div class="col-xs-8">';
                hasil += '<h4>'+data.articles[i].title +'</h4>';
                hasil += '<p style="color:black;">'+data.articles[i].source.name+' &nbsp; &#183; &nbsp; '+data.articles[i].publishedAt+'</p>';
                hasil += '</div>';
                hasil += '<div class="col-xs-4"><img src="'+link_img+'" style="width: 100%;"/></div>';
                hasil += '</div>';
                hasil += '</a>';
                hasil += '</li>';
            }
            postMessage(hasil);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    else if(tipe == 3){
        console.log("Masuk 3");
        fetch("https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=19240ce75a9c4669acbc4c027e63eb50").then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (var i = 0; i < data.articles.length; i++) {
                var link_img = data.articles[i].urlToImage;
                var source_name = data.articles[i].source.name
                if(source_name == "Telset.id" || source_name == "Bloomberg" || source_name == "Youtube.com" ||source_name == "Merdeka.com" || source_name == "Bola.net" || source_name == "Batutimes.com" ||source_name == "Haibunda.com" || source_name == "Kapanlagi.com" || source_name == "Brilio.net" || source_name == "detik.com" || source_name == "Theaustralian.com.au" || source_name == "Canada.com" || source_name == "Detik.com" || link_img == "" || link_img == "null"){
                    link_img = "src/img/noimage.jpg";
                }
                
                hasil += '<li style="list-style:none; border: 1px solid; margin-bottom:1%;">';
                hasil += '<a href="'+data.articles[i].url+'" style="text-decoration: none;">';
                hasil += '<div class="row" style="margin: 5px;">';
                hasil += '<div class="col-xs-8">';
                hasil += '<h4>'+data.articles[i].title +'</h4>';
                hasil += '<p style="color:black;">'+data.articles[i].source.name+' &nbsp; &#183; &nbsp; '+data.articles[i].publishedAt+'</p>';
                hasil += '</div>';
                hasil += '<div class="col-xs-4"><img src="'+link_img+'" style="width: 100%;"/></div>';
                hasil += '</div>';
                hasil += '</a>';
                hasil += '</li>';
            }
            postMessage(hasil);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
}
function newWikiSearch(){
  var $title = $('#title');
 var $wiki = $('#searchW');
var $click = $('#searchC');

  
  var $search = $('#n').val();
  console.log($search);
  $.ajax({
		url:'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch='+$search,
		success: function(data){
			$('.wiki-search').html('');
	
      var $subject = data.query.search;
      $title.text('Your Wikipedia Search On '+ $search);
      
      for(i=0;i<$subject.length;i++){
       var $wikiSubject = $subject[i].title;
        var $wikiSnippit = $subject[i].snippet;
       var url= 'http://en.wikipedia.org/wiki/'+ $wikiSubject;
        $wiki.append('<div class="divWiki"><a href="'+url+ '"><li><h4 class="topic">'+$wikiSubject+'</h4><h5 class="article">'+$wikiSnippit+'</h4></li></a></div><br/>');
      }
    }
  }); 
  
  
}
function newClickSearch(){

 newWikiSearch();
 

}

 
   
 
   
  
   
   
 
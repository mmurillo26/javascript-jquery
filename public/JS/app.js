$(document).ready(function(){
  // boxslider
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1000
    });

// posts section
    var posts = [
      {
        title: "Article Title 1",
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: "Article Title 2",
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: "Article Title 3",
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: "Article Title 4",
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ];

    posts.forEach((item, index) => {
      var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
          ${item.content}
        </p>
        <a href="#" class="showMore">Show more</a>
      </article>
      `;
      $('#posts').append(post);
    });

// theme selector
    var theme = $('#theme');

    $('#to-green').click(function(){
      theme.attr("href", "CSS/green.css")
    });

    $('#to-blue').click(function(){
      theme.attr("href", "CSS/blue.css")
    });

    $('#to-red').click(function(){
      theme.attr("href", "CSS/red.css")
    });

// go to top button
    $('#gotoTop').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

// form section
    $('.form').submit(function(){
      var form_name = $('#form_name').val();
      localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
      $('#userLoged').html("<strong>Bienvenido, "+form_name+"</strong>");
      $('#userLoged').append("<a id='logout' href='#'>Logout</a>");
      $('.form').hide();
      $('#logout').click(function(){
        localStorage.clear();
        location.reload();
      });
    }

// about section
    var aboutItem = [
      {
        title: 'Section 1',
        content: 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.'
      },
      {
        title: 'Section 2',
        content: 'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.'
      },
      {
        title: 'Section 3',
        content: 'Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.'
      },
      {
        title: 'Section 4',
        content: 'Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.'
      }
    ];

    aboutItem.forEach((item, index) => {
      var about = `
        <h2>${item.title}</h2>
        <div>
          <p>
            ${item.content}
          </p>
        </div>
      `;
      $('#about').append(about);
    });

      $('#about').accordion();

// clock Section
    setInterval(function(){
      var clock = new Date();
      $('#clock').html(clock);
    }, 1000);

// contact Section
    // $(function() {
    //   $.validate();
    // });

});

import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts = [
    {
      img: "5.jpg",
      name: "Plaza Mayor",
      caption: "The central plaza of Salamanca",
      faved: false,
      shared: false
    },
    {
      img: "85.jpg",
      name: "Park Bridge",
      caption: "From Maria Luisa Park in Seville",
      faved: false,
      shared: false
    },
    {
      img: "87.jpg",
      name: "Archeology Museum",
      caption: "Museum in Seville",
      faved: false,
      shared: false
    },
    {
      img: "103.jpg",
      name: "Seville Cathedral",
      caption: "Very touristy shot in Seville",
      faved: false,
      shared: false
    },
    {
      img: "110.jpg",
      name: "Alhambra Gardens",
      caption: "Taken at the Alhambra in Granada",
      faved: false,
      shared: false
    },
    {
      img: "142.jpg",
      name: "Alhambra Fountain",
      caption: "More from La Alhambra",
      faved: false,
      shared: false
    },
    {
      img: "176.jpg",
      name: "Salamanca Cathedral",
      caption: "Looking up at the grand cathedral",
      faved: false,
      shared: false
    },
    {
      img: "191.jpg",
      name: "Porto",
      caption: "Looking at the Douro River in Porto, Portugal",
      faved: false,
      shared: false
    },
    {
      img: "202.jpg",
      name: "Above the river",
      caption: "Also in Porto, taken on one of the large bridges",
      faved: false,
      shared: false
    },
    {
      img: "208.jpg",
      name: "Cathedral Courtyard",
      caption: "From another one of the large cathedrals in Salamanca",
      faved: false,
      shared: false
    },

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  favorite(post) {
    let index=this.posts.indexOf(post);
    if(index > -1) {
      if(post.faved) {
        this.posts[index].faved = false;
      } else {
        this.posts[index].faved = true;
      }
    }
  }

  share(post) {
    let index=this.posts.indexOf(post);
    if(index > -1) {
      if(post.shared) {
        this.posts[index].shared = false;
      } else {
        this.posts[index].shared = true;
      }
    }
  }

  delete(post) {
    let confirm=this.alertCtrl.create(
        {
          title: "Delete post?",
          message: "Are you sure you want to delete this?",
          buttons: [
            {
              text: "Nevermind"
            },
            {
              text: "Delete",
              handler: () => {
                let index=this.posts.indexOf(post);
                this.posts.splice(index, 1);
              }
            }
          ]
        }
    );
    confirm.present();
  }

}

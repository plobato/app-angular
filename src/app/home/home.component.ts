import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

//import { PostService } from './../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']//,
  //providers: [PostService]
})
export class HomeComponent implements OnInit {

  pais: number = 0;
  posts: IPost[] = [];
  message: string = '';
  constructor(
    //private route: ActivatedRoute,
    private router: Router//, private http: HttpClient, 
    //private postService: PostService
  ){
    
    //console.log(this.postService.getPost());
    //this.postService.getPost().subscribe(posts=> {this.posts = posts;console.log(posts);});
    //https://my-json-server.typicode.com/typicode/demo/posts
    //this.http.get('https://my-json-server.typicode.com/typicode/demo/posts')
    //    .subscribe(
    //        (data:any[])=> {
    //            console.log(data);
    //        }
    //    )
    //this.postService.cargarLista();
    //console.log( this.posts );
    //console.log("PASO 2");
  }

  ngOnInit() {
    //this.postService.currentMessage.subscribe(message => this.message = message);
    //this.postService.currentPosts.subscribe(posts => this.posts = posts);
  }

  startLoadingSpinner() {
    //this.ng4LoadingSpinnerService.show();
    
    //this.http.get<IPost[]>('https://my-json-server.typicode.com/typicode/demo/posts')
    //.subscribe(data => this.posts = data);
    //this.postService.cargarLista();
    //this.postService.cargarLista();

    
    //this.message = "LA PUTA MADRE";

    //this.ng4LoadingSpinnerService.hide();

    //this.router.navigate(['new']);
    //this.postService.changeMessage("LAlLALALAL");
    //this.router.navigate(['new', this.busqueda]);
    console.log("this.pais : " + this.pais);
    this.router.navigate(['new', this.pais]);

  }

}
interface IPost{
  id: string;
  title: string;
  //body: string;
}

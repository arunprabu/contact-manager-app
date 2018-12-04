import { Directive, ElementRef, Renderer2 } from '@angular/core';

//Decorator
@Directive({
  selector: '[appColorizr]'  // [] - means attribute 
})
export class ColorizrDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) { // dependency injection
    console.log("Inside Colorizer Directive ");
    console.log(this.elementRef.nativeElement);   // what element is using the directive
    //this.elementRef.nativeElement.style.backgroundColor = 'red'; 
    //this.elementRef.nativeElement.style.height = '300px';

    //but, there's an angular way
    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      'background-color',
      'red'
    );


    //let's add few more functionality inside - let's add powered by message
    //TODO: create your own element
    // let buttonElement = this.renderer.createElement('span');
    
    // this.renderer.createText('Powered by Colorizer Directive');
    // this.renderer.setProperty(buttonElement, 'style', 'float:right; font-size:10px; color: white;');

    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      'height',
      '300px'
    );

    //TODO: listen to events 
    //refer: https://github.com/arunprabu/e_y_mean_ng4/blob/master/mean_with_ng4/my-custom-directive/src/app/directives/highlighter.directive.ts
  }
  

}

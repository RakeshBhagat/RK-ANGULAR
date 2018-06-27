import {Directive, ElementRef,Renderer2} from '@angular/core'

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    constructor(private elementRef : ElementRef,
         private render:Renderer2)
    {
        this.elementRef.nativeElement.style.backgroundColor="green";
      
      // this.render.setStyle(this.elementRef.nativeElement,
      //  "background-color","aqua");
    }
}
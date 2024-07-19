1. content projection can be possible with ng-content
2. it can be used in both components and directives
3. if we want to render any html content between component selector then we should use it
```
<app-component>
  <h1>content projection</h1>
</app-component>

then we should use <ng-content> in template(html) file of app component
```
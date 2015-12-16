# LESS SPACE

Responsive CSS Spacing (Margin and Padding) classes built with LESS  & SASS compatible with / without Bootstrap.
It's 13kb minified and 1.3kb gzipped.


## Download

Install via **bower**

```
bower install less-space
```

Clone via **git**

```
git clone //github.com/Eomerx/less-space.git
```
---
### Installation
Add ``` less-space.css``` or ``` less-space.min.css ``` to your html.

---
### Changing responsive breakpoints
First, you must install **npm** dependencies
```
npm install
```
Then, compile stylesheets with **Grunt**
```
grunt
```
---

###Example Usage
This code block means; holder class has **margin-top: 20px** for medium and large screens (above 768px width default),

and **margin-top: 40px** for extra small and small screens (up to 768px width)

```html
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div class="holder xs-mt-40 md-mt-20 ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo facere veritatis molestias harum eveniet, eius modi?
        </p>
      </div><!-- "holder" -->
    </div><!-- "col-sm-6" -->
  </div><!-- "row" -->
</div><!-- "container" -->
```

### Using with Bootstrap
copy **src/less-space.less** file to your **Bootstrap** less folder.

Then, import it in **boostrap.less** anywhere after ``` variables.less ```

```
@import "less-space.less";
```

Comment out this lines, to get already defined variables from boostrap's ``` variables.less ```

```
@screen-sm: 480px;
```

```
@screen-md: 768px;
```

```
@screen-lg: 992px;
```

---
[Demo from CodePen](ttp://codepen.io/Aslanbakan/full/QwxjRP/)

---

## Version 1.1.1
1.0 First init

1.1.1 Added SASS support


## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)



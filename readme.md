# Ponyfy
>   Generate Some Pony Text based on [PonyIpsum.com](http://ponyipsum.com/).

## Usage

Include [jQuery](https://code.jquery.com/) 1.12 or higher:

    <script
        src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
        integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
        crossorigin="anonymous"></script>

Include ponyfy.min.js:

    <script src="/js/ponyfy.js"></script>
    
    <script>
        $(document).ready(function(){
            $(".ipsum").ponyfy();
        });
    </script>

In your html:

    <div class="ipsum"></div>

* `data-ipsumnumber`: (int value, default:1) number of paragraph
* `data-ipsumstart`: (bool value, default:1) first paragraph should start with 'Pony ipsum dolor sit amet'.
* `data-ipsumtype`: (string value, default:pony-and-filler) all-pony for pony only or pony-and-filler for pony mixed with miscellaneous 'lorem ipsum' filler.

## Exemple
    <div class="ipsum"></div> //basic
    <div class="ipsum" data-ipsumnumber="10"></div> // load 10 paragraph
    <div class="ipsum" data-ipsumstart="0"></div> // remove "Pony ipsum dolor sit amet"
    <div class="ipsum" data-ipsumtype="all-pony"></div> // all-pony for pony only or pony-and-filler for pony mixed with miscellaneous 'lorem ipsum' filler.



# htmlJS
A set of functions on JS to several proposis

# includeHTML(tag)
The includeHTML(tag) function allows you to include an external file in several HTML pages. For example, if you want to use a menu across multiple pages. Here's how you can use it:

1. Add the following line at the position where you want to import the file:

<div menu="/path/to/menu.html"></div>

Replace "/path/to/menu.html" with the correct path to your menu file.

2. Create a script section and include the following lines to load the file:

<script>
  includeHTML("head");
  includeHTML("menu");
</script>

The includeHTML("head") line loads the head section of the included file, and the includeHTML("menu") line loads the menu content.

The tag parameter in the includeHTML(tag) function should match the attribute used in the <div> tag. 
You can include as many files as you want by calling the includeHTML() function with different tags.

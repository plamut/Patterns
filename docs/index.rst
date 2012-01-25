Welcome to Patterns's documentation!
====================================

Patterns is a JavaScript library that enables designers to build rich
interactive prototypes without the need for writing any Javascript. All events
are triggered by classes and other attributes in the HTML, without abusing the
HTML as a programming language. Accessibility, SEO and well structured HTML are
core values of Patterns.

Using Patterns
--------------

To use the patterns library you only need to load it in your page.

.. code-block:: html

   <!DOCTYPE html>
   <html>
     <head>
       <script src="patterns-jquery.js"></script>
     </head>
     <body>
       ...
     </body>
   </html>

``patterns-jquery.js`` includes a copy of `jQuery <http://jquery.org>`_. If you
prefer to load jQuery separately you can use ``patterns.js`` instead.

.. code-block:: html

   <!DOCTYPE html>
   <html>
     <head>
       <script src="jquery-1.7.1.js"></script>
       <script src="patterns.js"></script>
     </head>
     <body>
       ...
     </body>
   </html>

Patterns supports using `RequireJS <http://requirejs.org/>`_ to manage its
resources. If you have a local copy of the Patterns library you can reference
it directly from your code:

.. code-block:: javascript

   require(["patterns"]);
  
If you are using a hosted version of the Patterns library you can configure
its URL path for it:

.. code-block:: javascript

  require.config({
      paths: {patterns: "https://raw.github.com/cornae/Patterns/master/src"}
  );


Contents
--------

.. toctree::
   :maxdepth: 2

   jsonly
   autofocus
   injection
   depends
   panels
   patterns/index

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

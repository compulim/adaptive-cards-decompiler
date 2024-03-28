# Adaptive Cards decompiler

This tool can be used to convert HTML rendered by Adaptive Cards library, back into JSON.

However, there are limitations, for instance:

* The decompiler use default values, if AC host config is applied to the HTML, it may not be able to decompile
* Data and formula cannot be decompiled, they are already hydrated in the HTML

We are building this tool for our own research purpose. Not every Adaptive Cards components and properties are decompiled.

Please contribute and improve this tool.

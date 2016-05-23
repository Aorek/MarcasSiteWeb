<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<html>
<head>
  <title>Nuestros Profesores</title>
</head>
<body>
<h1>Nuestros Profesores</h1>

<xsl:for-each select="profesor">
<div class="profesores" style="float: left; width: 300px;"  >
  <h3>Profesor número: <xsl:value-of select="@numero"/></h3>
  <div style="width: 70px; float: left;">
     <xsl:element name="img">
       <xsl:attribute name="src">
         <xsl:value-of select="foto/@ruta"/>
       </xsl:attribute>
       <xsl:attribute name="height">
         100
       </xsl:attribute>
     </xsl:element>
</div>
  <ul  style="float: left;">
    <li><xsl:value-of select="nombre"/></li>
    <li><xsl:value-of select="titulacion"/></li>
    <li><xsl:value-of select="email"/></li>
  </ul>

</div>
</xsl:for-each>

</body>
</html>

</xsl:template>
</xsl:stylesheet> 
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
   <html>
     <head>
       <link rel="stylesheet" type="text/css" href="../css/profesores.css"></link>
      </head>
   <body>
      

         
    <xsl:for-each select="personas/persona">
      <div class="divpersona">
      <xsl:element name="img">
      <xsl:attribute name="src">
      <xsl:value-of select="img/@ruta"/>
      </xsl:attribute>
      <xsl:attribute name="height">
      100
      </xsl:attribute>
      </xsl:element>
               <li><xsl:value-of select="nombre"/></li>
               <li><xsl:value-of select="titulacion"/></li>
               <li><xsl:value-of select="email"/></li>
       </div>        
      </xsl:for-each>
      
   </body>
   </html>
</xsl:template>
</xsl:stylesheet>
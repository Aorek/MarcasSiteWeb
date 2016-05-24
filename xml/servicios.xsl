<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/servicios">
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="../css/servicios.css" />
  </head>
  <body>
    <div id="servicios">
      <xsl:for-each select="servicio">
        <div class="celdaServicios">
          <div class='celdaIcon'>
            <img width="70" height="70">
                <xsl:attribute name="src">
                  <xsl:value-of select="icono"/>
                </xsl:attribute>
            </img>
            <h3>
              <xsl:value-of select="tipo"/>
            </h3>
          </div>
          <div>
            <div>
              <xsl:value-of select="desc"/>
            </div>
          </div>
        </div>
      </xsl:for-each>
    </div>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>
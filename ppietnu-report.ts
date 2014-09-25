<TeXmacs|1.99.1>

<style|<tuple|source|chinese>>

<\body>
  <\active*>
    <\src-title>
      <src-package|ppietnu-report|0.1>

      <\src-purpose>
        Standard styles for report of PPIETNU (Planning Project of Innovation
        and Entrepreneurship Training of National Undergraduate) in China.
      </src-purpose>

      <\src-copyright|2014-2020>
        Zhengyu Luo
      </src-copyright>

      <\src-license>
        GPL 3
      </src-license>
    </src-title>
  </active*>

  <\active*>
    <\src-comment>
      Language
    </src-comment>
  </active*>

  <assign|en|<macro|text|<with|font|roman|<arg|text>>>>

  <\active*>
    <\src-comment>
      Table of Contents
    </src-comment>
  </active*>

  <assign|table-of-contents-text|\<#76EE\><space|2fs>\<#5F55\>>

  <\active*>
    <\src-comment>
      Front Page Styles \| Header, Footer
    </src-comment>
  </active*>

  <set-page-number|1>

  <assign|page-number|<macro|<quote|<number|<page-the-page>|Roman>>>>

  <assign|page-odd-footer|<htab|5mm><with|font|roman|font-size|0.9fs|<page-number>><htab|5mm>>

  <assign|page-even-footer|<htab|5mm><with|font|roman|font-size|0.9fs|<page-number>><htab|5mm>>

  <\active*>
    <\src-comment>
      Content Page Styles \| Header, Footer
    </src-comment>
  </active*>

  <set-page-number|1>

  <assign|page-number|<macro|<quote|<page-the-page>>>>

  <assign|page-odd-footer|<htab|5mm><with|font|roman|font-size|0.9fs|-<space|0.2fs><page-number><space|0.2fs>-><space|3fn><htab|5mm>>

  <assign|page-even-footer|<htab|5mm><with|font|roman|font-size|0.9fs|-<space|0.2fs><page-number><space|0.2fs>-><space|3fn><htab|5mm>>

  <\active*>
    <\src-comment>
      Content Styles \| Section
    </src-comment>
  </active*>

  <assign|sectional-short-style|<macro|false>>

  <assign|sectional-sep|<space|1fs>>

  <assign|chapter-title|<\macro|name>
    <sectional-centered|<with|font|simhei|font-size|1.8fs|<arg|name>>>
  </macro>>

  <assign|chapter-numbered-title|<\macro|title>
    <chapter-title|\<#7B2C\><space|0.2fs><the-chapter><space|0.2fs>\<#7AE0\><chapter-sep><arg|title>>
  </macro>>

  <assign|section-title|<\macro|name>
    <sectional-normal|<with|font|simhei|font-size|1.4fs|<arg|name>>>
  </macro>>

  <assign|section-numbered-title|<\macro|title>
    <section-title|<style-with|src-compact|all|<with|font|roman|<the-section>>><section-sep><arg|title>>
  </macro>>

  <assign|subsection-title|<\macro|name>
    <sectional-normal|<with|font|simhei|font-size|1.4fs|<arg|name>>>
  </macro>>

  <assign|subsection-numbered-title|<\macro|title>
    <subsection-title|<with|font|roman|<the-subsection>><subsection-sep><arg|title>>
  </macro>>

  <\active*>
    <\src-comment>
      Content Styles \| Paragraph
    </src-comment>
  </active*>

  <assign|par-first|2fs>

  <assign|par-sep|0.9fs>

  <assign|par-par-sep|0>

  <\active*>
    <\src-comment>
      Content Styles \| Text
    </src-comment>
  </active*>

  <assign|font-size|1.2fs>

  <\active*>
    <\src-comment>
      Content Styles \| List
    </src-comment>
  </active*>

  <assign|aligned-item|<macro|name|<with|par-first|<minus|<item-hsep>>|<yes-indent>><resize|<arg|name>|<minus|1r|<minus|<item-hsep>|0.5fn>>||<plus|1r|0.5fn>|>>>

  <\active*>
    <\src-comment>
      Content Styles \| Math
    </src-comment>
  </active*>

  <assign|display-equation|<macro|nr|<chapter-prefix><arg|nr>>>

  <\active*>
    <\src-comment>
      Page Margin
    </src-comment>
  </active*>

  <assign|page-foot-sep|5mm>

  <associate|page-top|2.5cm>

  <associate|page-bot|2.8cm>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>

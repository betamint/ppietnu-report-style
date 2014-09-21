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

  <assign|page-odd-footer|<htab|5mm><with|font|roman|<page-number>><htab|5mm>>

  <assign|page-even-footer|<htab|5mm><with|font|roman|<page-number>><htab|5mm>>

  <\active*>
    <\src-comment>
      Content Page Styles \| Header, Footer
    </src-comment>
  </active*>

  <set-page-number|1>

  <assign|page-number|<macro|<quote|<page-the-page>>>>

  <assign|page-odd-footer|<htab|5mm><with|font|roman|-<space|0.2fs><page-number><space|0.2fs>-><space|3fn><htab|5mm>>

  <assign|page-even-footer|<htab|5mm><with|font|roman|-<space|0.2fs><page-number><space|0.2fs>-><space|3fn><htab|5mm>>

  <\active*>
    <\src-comment>
      Content Styles \| Section
    </src-comment>
  </active*>

  <assign|chapter|<macro|title|<assign|par-first|0><next-chapter><chapter-clean><toc-main-2|<arg|title>><with|font|simhei|font-size|1.8fs|<htab|0>\<#7B2C\><space|0.2fs><value|chapter-nr><space|0.2fs>\<#7AE0\>\<#3000\><arg|title><htab|0>><assign|par-first|2fs>>>

  <assign|chapter*|<macro|title|<assign|par-first|0><chapter-clean><toc-main-2|title><with|font|simhei|font-size|1.8fs|<htab|0><arg|title><htab|0><assign|par-first|2fs>>>>

  <assign|section|<macro|title|<assign|par-first|0><next-section><section-clean><toc-normal-1|<arg|title>><with|font|simhei|font-size|1.4fs|<with|font|roman|<value|chapter-nr>.<value|section-nr>>\<#3000\><arg|title>><assign|par-first|2fs>>>

  <assign|subsection|<macro|title|<assign|par-first|0><next-subsection><subsection-clean><toc-normal-2|<arg|title>><with|font|simhei|font-size|1.4fs|<with|font|roman|<value|chapter-nr>.<value|section-nr>.<value|subsection-nr>>\<#3000\><arg|title>><assign|par-first|2fs>>>

  <\active*>
    <\src-comment>
      Content Styles \| Paragraph
    </src-comment>
  </active*>

  <assign|par-first|2fs>

  <assign|par-sep|0.5fs>

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

  <assign|display-equation|<quote|<value|chapter-nr>>.<quote|<value|equation-nr>>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>

<\references>
  <\collection>
    <associate|auto-1|<tuple|1|?|..\\..\\..\\..\\AppData\\Roaming\\TeXmacs\\texts\\scratch\\no_name_23.tm>>
  </collection>
</references>
# Flowchart
``` mermaid
flowchart TD
    start((start))
    hitung["hitung(10, luas, keliling)"]
    param[/r = 10\ncbl = luas\ncbk = keliling/]
    cb[/"hasilLuas = cbl(10)"/]
    cbl["Menjalankan callback luas(10)"]
    prosesCbl[Hitung phi x r x r]
    cblReturn[/"return hasil luas() = 314"/]

    cb2[/"hasilKeliling = cblk(10)"/]
    cbk["Menjalankan callback keliling(10)"]
    prosesCbk[Hitung 2 x phi x r]
    cbkReturn[/"return hasil keliling() = 62.8"/]

    output[/"output hitung()"/]
    stop(((stop)))

    start --> hitung --> param --> cb --> cbl --> prosesCbl --> cblReturn
    param --> cb2 --> cbk --> prosesCbk --> cbkReturn

    cblReturn --> output 
    cbkReturn --> output -->stop
```
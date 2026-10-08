# FLowchart
``` mermaid
flowchart TD
    start((start))
    nilai[/nilai = 70, 85, 80, 90, 75/]
    nilai2[/nilai2 = 75, 80, 65, 80, 85/]
    spread[spread nilai dan nilai2]
    gabungan[/Nilai gabungan = 70, 85, 80, 90, 75, 75, 80, 65, 80, 85/]
    max[/ Nilai max 90 di index 3 /]
    min[/ Nilai min 65 di index 7 /]
    sum[Total semua nilai]
    avg[Total nilai / jumlah nilai]
    avgOutput[/Nilai rata-rata: 78,5/]
    stop(((stop)))

    start --> nilai --> nilai2 --> spread --> gabungan
    gabungan --> max --> stop
    gabungan --> min --> stop
    gabungan --> sum --> avg --> avgOutput --> stop

    
```
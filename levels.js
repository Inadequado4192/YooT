const LEVELS = {
    easy: [
        "eyJzaXplIjo5LCJlbGVtZW50cyI6W3sia2V5IjoiYmxvY2siLCJ4IjoyLCJ5Ijo4fSx7ImtleSI6ImJsb2NrIiwieCI6MywieSI6OH0seyJrZXkiOiJibG9jayIsIngiOjQsInkiOjh9LHsia2V5IjoiYmxvY2siLCJ4Ijo1LCJ5Ijo4fSx7ImtleSI6ImJsb2NrIiwieCI6NiwieSI6OH0seyJrZXkiOiJjb2luIiwieCI6NCwieSI6Nn0seyJrZXkiOiJjb2luIiwieCI6MywieSI6Nn0seyJrZXkiOiJibG9jayIsIngiOjYsInkiOjd9LHsia2V5IjoiYmxvY2siLCJ4Ijo2LCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6NiwieSI6NX0seyJrZXkiOiJwbGF5ZXIiLCJ4Ijo1LCJ5Ijo0fSx7ImtleSI6ImZpbmlzaCIsIngiOjIsInkiOjR9LHsia2V5IjoiYmxvY2siLCJ4Ijo2LCJ5Ijo0fSx7ImtleSI6ImJsb2NrIiwieCI6NiwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjUsInkiOjN9LHsia2V5IjoiYmxvY2siLCJ4Ijo0LCJ5IjozfSx7ImtleSI6ImJsb2NrIiwieCI6MSwieSI6OH0seyJrZXkiOiJibG9jayIsIngiOjEsInkiOjd9LHsia2V5IjoiYmxvY2siLCJ4IjoxLCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6MSwieSI6NX0seyJrZXkiOiJibG9jayIsIngiOjEsInkiOjR9LHsia2V5IjoiYmxvY2siLCJ4IjoxLCJ5IjozfSx7ImtleSI6ImJsb2NrIiwieCI6MiwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjMsInkiOjN9XX0=",
        "eyJzaXplIjoxMCwiZWxlbWVudHMiOlt7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6NH0seyJrZXkiOiJibG9jayIsIngiOjAsInkiOjV9LHsia2V5IjoiYmxvY2siLCJ4IjoxLCJ5Ijo1fSx7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjEsInkiOjN9LHsia2V5IjoiYmxvY2siLCJ4IjozLCJ5Ijo0fSx7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6Mn0seyJrZXkiOiJibG9jayIsIngiOjEsInkiOjJ9LHsia2V5IjoiYmxvY2siLCJ4IjoyLCJ5IjoyfSx7ImtleSI6ImJsb2NrIiwieCI6MywieSI6Mn0seyJrZXkiOiJibG9jayIsIngiOjQsInkiOjJ9LHsia2V5IjoiYmxvY2siLCJ4Ijo1LCJ5IjoyfSx7ImtleSI6ImJsb2NrIiwieCI6NiwieSI6Mn0seyJrZXkiOiJibG9jayIsIngiOjcsInkiOjJ9LHsia2V5IjoiYmxvY2siLCJ4Ijo4LCJ5IjoyfSx7ImtleSI6ImJsb2NrIiwieCI6OSwieSI6Mn0seyJrZXkiOiJibG9jayIsIngiOjAsInkiOjZ9LHsia2V5IjoiYmxvY2siLCJ4IjoxLCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6MiwieSI6Nn0seyJrZXkiOiJibG9jayIsIngiOjMsInkiOjZ9LHsia2V5IjoiYmxvY2siLCJ4Ijo0LCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6NSwieSI6Nn0seyJrZXkiOiJibG9jayIsIngiOjYsInkiOjZ9LHsia2V5IjoiYmxvY2siLCJ4Ijo3LCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6OCwieSI6Nn0seyJrZXkiOiJibG9jayIsIngiOjksInkiOjZ9LHsia2V5IjoiYmxvY2siLCJ4Ijo1LCJ5Ijo1fSx7ImtleSI6ImJsb2NrIiwieCI6NSwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjcsInkiOjR9LHsia2V5IjoiYmxvY2siLCJ4Ijo4LCJ5Ijo0fSx7ImtleSI6ImJsb2NrIiwieCI6OSwieSI6NH0seyJrZXkiOiJibG9jayIsIngiOjksInkiOjN9LHsia2V5IjoiYmxvY2siLCJ4Ijo5LCJ5Ijo1fSx7ImtleSI6InBsYXllciIsIngiOjEsInkiOjR9LHsia2V5IjoiZmluaXNoIiwieCI6OCwieSI6NX0seyJrZXkiOiJmaW5pc2giLCJ4Ijo4LCJ5IjozfSx7ImtleSI6ImNvaW4iLCJ4IjozLCJ5Ijo1fSx7ImtleSI6ImNvaW4iLCJ4IjozLCJ5IjozfV19"
    ],
    medium: [
        "eyJzaXplIjoxMywiZWxlbWVudHMiOlt7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6N30seyJrZXkiOiJibG9jayIsIngiOjAsInkiOjh9LHsia2V5IjoiYmxvY2siLCJ4IjowLCJ5Ijo5fSx7ImtleSI6ImJsb2NrIiwieCI6MSwieSI6OX0seyJrZXkiOiJibG9jayIsIngiOjIsInkiOjl9LHsia2V5IjoiYmxvY2siLCJ4Ijo0LCJ5Ijo5fSx7ImtleSI6ImJsb2NrIiwieCI6NSwieSI6OX0seyJrZXkiOiJibG9jayIsIngiOjYsInkiOjl9LHsia2V5IjoiYmxvY2siLCJ4Ijo3LCJ5Ijo5fSx7ImtleSI6ImJsb2NrIiwieCI6OCwieSI6OX0seyJrZXkiOiJibG9jayIsIngiOjksInkiOjl9LHsia2V5IjoiYmxvY2siLCJ4Ijo5LCJ5Ijo4fSx7ImtleSI6ImJsb2NrIiwieCI6OSwieSI6N30seyJrZXkiOiJibG9jayIsIngiOjAsInkiOjEwfSx7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6MTF9LHsia2V5IjoiYmxvY2siLCJ4IjowLCJ5IjoxMn0seyJrZXkiOiJibG9jayIsIngiOjEsInkiOjEyfSx7ImtleSI6ImJsb2NrIiwieCI6MiwieSI6MTJ9LHsia2V5IjoiYmxvY2siLCJ4IjozLCJ5Ijo3fSx7ImtleSI6ImJsb2NrIiwieCI6NCwieSI6Nn0seyJrZXkiOiJibG9jayIsIngiOjUsInkiOjh9LHsia2V5IjoiYmxvY2siLCJ4Ijo3LCJ5Ijo3fSx7ImtleSI6ImJsb2NrIiwieCI6NywieSI6Nn0seyJrZXkiOiJibG9jayIsIngiOjYsInkiOjZ9LHsia2V5IjoiYmxvY2siLCJ4IjowLCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6NX0seyJrZXkiOiJibG9jayIsIngiOjAsInkiOjR9LHsia2V5IjoiYmxvY2siLCJ4IjowLCJ5IjozfSx7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6Mn0seyJrZXkiOiJibG9jayIsIngiOjMsInkiOjZ9LHsia2V5IjoiYmxvY2siLCJ4IjoxLCJ5Ijo3fSx7ImtleSI6ImJsb2NrIiwieCI6MiwieSI6NX0seyJrZXkiOiJibG9jayIsIngiOjMsInkiOjV9LHsia2V5IjoiYmxvY2siLCJ4IjoyLCJ5Ijo0fSx7ImtleSI6ImJsb2NrIiwieCI6MiwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjUsInkiOjR9LHsia2V5IjoiYmxvY2siLCJ4Ijo1LCJ5IjozfSx7ImtleSI6ImJsb2NrIiwieCI6NCwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjQsInkiOjJ9LHsia2V5IjoiYmxvY2siLCJ4IjoyLCJ5IjoyfSx7ImtleSI6ImJsb2NrIiwieCI6MiwieSI6MH0seyJrZXkiOiJibG9jayIsIngiOjEsInkiOjB9LHsia2V5IjoiYmxvY2siLCJ4IjowLCJ5IjowfSx7ImtleSI6ImJsb2NrIiwieCI6MCwieSI6MX0seyJrZXkiOiJibG9jayIsIngiOjIsInkiOjF9LHsia2V5IjoiYmxvY2siLCJ4IjozLCJ5IjowfSx7ImtleSI6ImJsb2NrIiwieCI6NCwieSI6MH0seyJrZXkiOiJibG9jayIsIngiOjUsInkiOjB9LHsia2V5IjoiYmxvY2siLCJ4Ijo2LCJ5IjowfSx7ImtleSI6ImJsb2NrIiwieCI6NiwieSI6MX0seyJrZXkiOiJibG9jayIsIngiOjcsInkiOjB9LHsia2V5IjoiYmxvY2siLCJ4Ijo3LCJ5IjoyfSx7ImtleSI6ImJsb2NrIiwieCI6NywieSI6M30seyJrZXkiOiJibG9jayIsIngiOjcsInkiOjF9LHsia2V5IjoiYmxvY2siLCJ4Ijo3LCJ5Ijo1fSx7ImtleSI6ImJsb2NrIiwieCI6OCwieSI6NX0seyJrZXkiOiJibG9jayIsIngiOjksInkiOjV9LHsia2V5IjoiYmxvY2siLCJ4IjoxMCwieSI6N30seyJrZXkiOiJibG9jayIsIngiOjEwLCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6MTAsInkiOjV9LHsia2V5IjoiYmxvY2siLCJ4Ijo5LCJ5Ijo0fSx7ImtleSI6ImJsb2NrIiwieCI6OSwieSI6M30seyJrZXkiOiJibG9jayIsIngiOjksInkiOjJ9LHsia2V5IjoiYmxvY2siLCJ4Ijo4LCJ5IjowfSx7ImtleSI6ImJsb2NrIiwieCI6OSwieSI6MH0seyJrZXkiOiJibG9jayIsIngiOjEwLCJ5IjowfSx7ImtleSI6ImJsb2NrIiwieCI6MTEsInkiOjB9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6MH0seyJrZXkiOiJibG9jayIsIngiOjExLCJ5IjoxfSx7ImtleSI6ImJsb2NrIiwieCI6MTEsInkiOjJ9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6Mn0seyJrZXkiOiJibG9jayIsIngiOjEyLCJ5IjozfSx7ImtleSI6ImJsb2NrIiwieCI6MTIsInkiOjR9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6NX0seyJrZXkiOiJibG9jayIsIngiOjEyLCJ5Ijo2fSx7ImtleSI6ImJsb2NrIiwieCI6MTIsInkiOjF9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6N30seyJrZXkiOiJibG9jayIsIngiOjEyLCJ5Ijo4fSx7ImtleSI6ImJsb2NrIiwieCI6MTIsInkiOjl9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6MTB9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6MTF9LHsia2V5IjoiYmxvY2siLCJ4IjoxMiwieSI6MTJ9LHsia2V5IjoiYmxvY2siLCJ4IjoxMSwieSI6MTJ9LHsia2V5IjoiYmxvY2siLCJ4IjoxMCwieSI6MTJ9LHsia2V5IjoiYmxvY2siLCJ4Ijo5LCJ5IjoxMn0seyJrZXkiOiJibG9jayIsIngiOjgsInkiOjEyfSx7ImtleSI6ImJsb2NrIiwieCI6NywieSI6MTJ9LHsia2V5IjoiYmxvY2siLCJ4Ijo2LCJ5IjoxMn0seyJrZXkiOiJibG9jayIsIngiOjUsInkiOjEyfSx7ImtleSI6ImJsb2NrIiwieCI6NCwieSI6MTJ9LHsia2V5IjoiYmxvY2siLCJ4IjozLCJ5IjoxMn0seyJrZXkiOiJibG9jayIsIngiOjExLCJ5IjozfSx7ImtleSI6ImJsb2NrIiwieCI6MTAsInkiOjl9LHsia2V5IjoiYmxvY2siLCJ4Ijo5LCJ5IjoxMH0seyJrZXkiOiJibG9jayIsIngiOjcsInkiOjExfSx7ImtleSI6ImJsb2NrIiwieCI6NSwieSI6MTB9LHsia2V5IjoiYmxvY2siLCJ4Ijo1LCJ5IjoxMX0seyJrZXkiOiJibG9jayIsIngiOjMsInkiOjExfSx7ImtleSI6ImJsb2NrIiwieCI6MSwieSI6MTB9LHsia2V5IjoiZmluaXNoIiwieCI6NCwieSI6MTF9LHsia2V5IjoicGxheWVyIiwieCI6MTEsInkiOjR9LHsia2V5IjoiY29pbiIsIngiOjYsInkiOjExfSx7ImtleSI6ImNvaW4iLCJ4IjozLCJ5IjoxfV19"
    ],
    hard: []
}
# PewnaPogoda.pl - Aplikacja Pogodowa

Intuicyjna i nowoczesna aplikacja pogodowa stworzona w React, dostarczająca szczegółowych informacji na temat warunkach atmosferycznych.

![image](https://github.com/user-attachments/assets/7ab5e1cb-92db-42dc-8e78-6cfc855a0302)


## Funkcjonalności

- **Aktualna Pogoda**
  - Temperatura rzeczywista i odczuwalna
  - Wilgotność powietrza
  - Prędkość i kierunek wiatru
  - Jakość powietrza (PM2.5 i PM10)

- **Prognoza 24-godzinna**
  - Temperatura godzinowa
  - Wilgotność
  - Prędkość wiatru
  - Interaktywny scroll z danymi

- **Prognoza Długoterminowa**
  - Prognozy 7-dniowa i 14-dniowa
  - Temperatury maksymalne i minimalne
  - Suma opadów
  - Prędkość i kierunek wiatru
  - Wizualizacja danych na wykresie (min, max temperatura)

- **Efekty Wizualne**
  - Dynamiczne tło dostosowane do warunków pogodowych
  - Animowane chmury
  - Efekty deszczu
  - Zmiana motywu dzień/noc

## Technologie

- React.js
- Chart.js
- Material-UI
- Axios
- React Icons

## API

Aplikacja korzysta z następujących API:
- Open-Meteo API (dane pogodowe)
- OpenCage Geocoding API (geolokalizacja)
- Open-Meteo Air Quality API (jakość powietrza)

## Instalacja

### 1. Sklonuj repozytorium:
```bash
git clone https://github.com/aleksanderbialka/weather-app.git

```

### 2. Dodaj swój klucz API do pliku .env

Utworz darmowe konto na stronie i pobierz klucz API: https://opencagedata.com/dashboard 

Dodaj klucz API do pliku .env

```bash
REACT_APP_GEOCODING_API_KEY=twój_klucz_api

```

### 3. Zbuduj kontenery i uruchom aplikacje

```bash

docker compose up

```

### 4. Aplikacja powinna być dostępna na porcie 3000

http://localhost:3000



## Użytkowanie
Wyszukaj miasto wpisując jego nazwę w polu wyszukiwania

Przełączaj się między widokami za pomocą zakładek:
- Dziś - aktualna pogoda i prognoza 24h
- 7 dni - prognoza tygodniowa
- 14 dni - prognoza dwutygodniowa

## Dodatkowe zrzuty ekranu aplikacji

![image](https://github.com/user-attachments/assets/ecc2763c-6df7-489e-8c0f-e5cb462095c4)

![image](https://github.com/user-attachments/assets/2c5f8e1c-0f88-481a-a17b-d86883a46837)


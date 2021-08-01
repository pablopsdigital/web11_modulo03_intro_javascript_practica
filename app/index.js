import { europeanAllFootballTeams } from "./teamsData.js";
import EuroCupChampionship from "./modules/EuroCupChampionship.js";

//=======================================================================================
//Seleccionar 16 equipos aleatorios del total
//=======================================================================================
function selectTeams(numberTeamsRound, listTeams) {
  const clasificatedTeams = [];
  const clasificatedTeamsPlayCreate = [];

  //Seleccionar equipos aleatoriamente
  for (let i = 0; i < numberTeamsRound; i++) {
    let random_index;
    while (!random_index) {
      var tmp = Math.floor(Math.random() * listTeams.length);
      if (!clasificatedTeams.filter((g) => listTeams[tmp] == g).length)
        random_index = tmp;
    }
    clasificatedTeams.push(listTeams[random_index]);
  }

  return clasificatedTeams;
}
const clasificatedTeamsPlay = selectTeams(16, europeanAllFootballTeams);

//Se muestra el título del campeonato
console.log("========================================================");
console.log("================ COMIENZA LA EUROCOPA ==================");
console.log("========================================================\n");

//=======================================================================================
//Se crea la Eurocopa
//=======================================================================================
const EuroCup2020 = new EuroCupChampionship(
  "Eurocopa 2020",
  clasificatedTeamsPlay
);

//Mostrar los equipos clasificados para los octavos de final
console.log("Equipos clasificados para los octavos de final:");
console.log("========================================================\n");
for (var i = 0; i < clasificatedTeamsPlay.length; i++) {
  console.log(`${clasificatedTeamsPlay[i]}`);
}

//=======================================================================================
// Jugar Octavos de final (no empates) - 16 Equipos
//=======================================================================================
const round8Calendar = EuroCup2020.initMatchCalendar(EuroCup2020.teams);
//console.log(round8Calendar);
const results8Round = EuroCup2020.playRound("OCTAVOS DE FINAL", round8Calendar);
EuroCup2020.showResults(results8Round);

//=======================================================================================
// Jugar Cuartos de final (no empates) - 8 Equipos
//=======================================================================================
const clasificatedTeamsRound4 = results8Round.map(
  (results8Round) => results8Round.winnerTeam
);
const round4Calendar = EuroCup2020.initMatchCalendar(clasificatedTeamsRound4);
//console.log(round4Calendar);
const results4Round = EuroCup2020.playRound("CUARTOS DE FINAL", round4Calendar);
EuroCup2020.showResults(results4Round);

//=======================================================================================
// Jugar Semifinales de final (no empates) - 4 Equipos
//=======================================================================================
const clasificatedTeamsRound2 = results4Round.map(
  (results4Round) => results4Round.winnerTeam
);
const round2Calendar = EuroCup2020.initMatchCalendarSemis(
  clasificatedTeamsRound2
);
//console.log(round4Calendar);
const results2Round = EuroCup2020.playRound(
  "SEMIFINALES DE FINAL",
  round2Calendar
);
EuroCup2020.showResults(results2Round);

//=======================================================================================
// Jugar 3º y 4º puesto - 2 Equipos
//=======================================================================================
const clasificatedTeamsConsolationMatch = results2Round.map(
  (results2Round) => results2Round.loosingTeam
);
const roundConsolationCalendar = EuroCup2020.initMatchCalendar(
  clasificatedTeamsConsolationMatch
);
//console.log(round4Calendar);
const resultsConsolationMath = EuroCup2020.playRound(
  "TERCER Y CUARTO PUESTO",
  roundConsolationCalendar
);
EuroCup2020.showResults(resultsConsolationMath);

//=======================================================================================
// Jugar final - 2 Equipos
//=======================================================================================
const clasificatedTeamsFinal = results2Round.map(
  (results2Round) => results2Round.winnerTeam
);
const roundFinalCalendar = EuroCup2020.initMatchCalendar(
  clasificatedTeamsFinal
);
const resultsFinal = EuroCup2020.playRound("FINAL", roundFinalCalendar);
EuroCup2020.showResults(resultsFinal);
EuroCup2020.showResultsWinner(resultsFinal);

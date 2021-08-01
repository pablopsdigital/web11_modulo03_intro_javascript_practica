import Match from "./Match.js";

export default class Championship {
  //Constructor
  //============================================================================
  constructor(name, teams = [], config = {}) {
    this.name = name;
    this.matchCalendar = [];
    this.setup(config);
    this.setupTeams(teams);
  }

  //Método para generar la planificación
  //============================================================================
  setup(config) {
    const defaultConfig = new Round();
  }

  //=======================================================================================
  //Se crea los partidos de una fase en función del número de equipos
  //=======================================================================================
  //De un array de equipos se crea la estructura y se asignan los partidos
  initMatchCalendar(teamsClasificatedPlayTheRound) {
    const roundCalendar = [];
    const matchesNumber = teamsClasificatedPlayTheRound.length / 2; //Número de partidos
    const teamsNumber = teamsClasificatedPlayTheRound.length; //Número de equipos

    for (var i = 0; i < matchesNumber; i++) {
      //Crear asignación de equipos por partido
      const matchTemp = new Match(
        "Q" + (i + 1),
        teamsClasificatedPlayTheRound[i].name,
        teamsClasificatedPlayTheRound[teamsNumber - 1 - i].name //Final de bucle - recorrido inverso
      );
      roundCalendar.push(matchTemp);
    }
    return roundCalendar;
  }

  initMatchCalendarSemis(teamsClasificatedPlayTheRound) {
    const roundCalendar = [];
    const matchesNumber = teamsClasificatedPlayTheRound.length / 2; //Número de partidos
    const teamsNumber = teamsClasificatedPlayTheRound.length; //Número de equipos

    //console.log(teamsClasificatedPlayTheRound);
    for (var i = 0; i < matchesNumber; i++) {
      //Crear asignación de equipos por partido
      const matchTemp = new Match(
        "Q" + (i + 1),
        teamsClasificatedPlayTheRound[i].name,
        teamsClasificatedPlayTheRound[i + 2].name //Final de bucle - recorrido inverso
      );
      roundCalendar.push(matchTemp);
    }
    return roundCalendar;
  }

  playRound(roundName, teamsList) {
    console.log(`\n============ ${roundName} ============`);
    const teamsWinnerRound = [];
    for (var i = 0; i < teamsList.length; i++) {
      teamsWinnerRound.push(teamsList[i].play());
    }
    return teamsWinnerRound;
  }

  showResults(teamsWinnerRound) {
    for (var i = 0; i < teamsWinnerRound.length; i++) {
      console.log(
        `${teamsWinnerRound[i].teamHome.name} ${teamsWinnerRound[i].homeGoals} - ${teamsWinnerRound[i].awayGoals} ${teamsWinnerRound[i].teamAway.name} => ${teamsWinnerRound[i].winnerTeam.name}`
      );
    }
  }

  showResultsWinner(teamsWinnerRound) {
    for (var i = 0; i < teamsWinnerRound.length; i++) {
      console.log("\n==================================================");
      console.log(
        `${teamsWinnerRound[i].winnerTeam.name} campeona de la ${this.name} !!!`.toUpperCase()
      );
      console.log("==================================================");
    }
  }
}

export default class Match {
  constructor(name, teamHome, teamAway) {
    this.name = name;
    this.teamHome = teamHome;
    this.teamAway = teamAway;
  }

  //Simula el resultado del partido
  play() {
    var matchResult = null;
    var winnerTeam = null;
    var loosingTeam = null;
    var homeGoals = 0;
    var awayGoals = 0;

    //No se permite empate
    while (homeGoals == awayGoals) {
      homeGoals = this.generateGoals();
      awayGoals = this.generateGoals();
    }

    //Si los goles del equipo local son menores
    if (homeGoals < awayGoals) {
      this.winnerTeam = this.teamAway;
      this.loosingTeam = this.teamHome;
    } else {
      this.winnerTeam = this.teamHome;
      this.loosingTeam = this.teamAway;
    }

    // return `(${this.name}) ${this.teamHome}: ${homeGoals} - ${this.teamAway}: ${awayGoals} => ${this.winnerTeam}`;

    return (matchResult = {
      name: this.name,
      winnerTeam: { name: this.winnerTeam },
      loosingTeam: { name: this.loosingTeam },
      teamHome: { name: this.teamHome },
      teamAway: { name: this.teamAway },
      homeGoals: homeGoals,
      awayGoals: awayGoals,
    });
  }

  //Método para simular los goles de un equipo
  generateGoals() {
    return Math.floor(Math.random() * 10);
  }
}

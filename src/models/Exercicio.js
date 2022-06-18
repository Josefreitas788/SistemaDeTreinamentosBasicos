/**
* Falta colocar a validação dos dados
* para os métodos do tipo set e completar
* os métodos do tipo get
*/

/**
* Classe Exercicio
*/

class Exercicio {
	#tempo
	#tipo
	#avaliacao
	#cargaIntensidade
	/**
	* Constructor da Classe Exercicio
	*
	* @param {String} tempo
	* @param {String} tipo
	* @param {string} avaliacao
	* @param {String} cargaIntensidade
	* @returns {bool} 
	*/
	constructor(tempo, tipo, avaliacao, cargaIntensidade) {
		this.#tempo = tempo
		this.#tipo = tipo
		this.#avaliacao = avaliacao
		this.#cargaIntensidade = cargaIntensidade

		return true
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getTempo() {
		return this.#tempo
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getTipo(){
		return this.#tipo
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getAvalicao() {
		return this.#avaliacao
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getCargaItensidade(){
		return this.#cargaIntensidade
	}


	/**
	* @param {String} tempo
	* @returns {bool}
	*/
	set setTempo(tempo) { 
    this.#tempo = tempo;
    return true
  }
	
	/**
	* @param {String} tipo
	* @returns {bool}
	*/
	set setTipo(tipo){ 
    this.#tipo = tipo;
    return true}

	/**
	* @param {String}
	* @returns {bool}
	*/
	set setAvalicao(avaliacao) {
    this.#avaliacao = avaliacao;
    return true
  }

	/**
	* @param {String}
	* @returns {bool}
	*/
	set setCargaIntensidade(cargaIntensidade){
    this.#cargaIntensidade = cargaIntensidade;
    return true
  }
}

module.exports = Exercicio;
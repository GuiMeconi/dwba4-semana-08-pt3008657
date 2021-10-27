class Aluno
{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota)
  {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;     
  }

  nomeCompleto()
  {
	  return (this.primeiroNome + " " + this.segundoNome);
  }

  media()
  {
	  return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);	  
  }

  situacao()
  {
	  if (this.media() > 6)
    {
		  return "Aprovado";
	  }
    else
    {
      return "Reprovado";
    }
  }
}

function criarAlunos()
{
	var aluno = [new Aluno("Januário", "Caldas", 3, 6),
                new Aluno("Lisandra", "Calheiros", 7, 7),
                new Aluno("Valter", "Monte", 3, 10),
                new Aluno("Guilherme", "Cunha", 10, 8),
                new Aluno("Isabelle", "Barbosa", 9, 6)];
  aluno.forEach(mostraAluno);
}

criarAlunos();

function mostraAluno(obj)
{
  alert("Nome completo: " + obj.nomeCompleto() + "\n" + "Média: " + obj.media() + "\n" + "Situação: " + obj.situacao());
}
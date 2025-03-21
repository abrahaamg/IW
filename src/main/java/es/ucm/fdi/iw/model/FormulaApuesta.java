package es.ucm.fdi.iw.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.persistence.*;
import java.util.List;
import es.ucm.fdi.iw.model.Resultado;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormulaApuesta {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gen")
    @SequenceGenerator(name = "gen", sequenceName = "gen")
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "evento_id")
    private Evento evento;
    
    @ManyToOne
    @JoinColumn(name = "creador_id")
    private User creador;
    
    private String formula;
    private String nombre;
    private double dineroAfavor;
    private double dineroEnContra;

    @Enumerated(EnumType.STRING)
    private Resultado resultado; 
    
    
    @OneToMany(mappedBy = "formulaApuesta")
    private List<Apuesta> apuestas;

    @Transient
    public double calcularCuota(boolean aFavor) {
        if (aFavor) {
            return dineroEnContra > 0 ? (((dineroAfavor + dineroEnContra) / dineroAfavor)) : 1.0;
        } else {
            return dineroAfavor > 0 ? (((dineroEnContra + dineroAfavor) / dineroEnContra)) : 1.0;
        }
    }

}

package es.ucm.fdi.iw.model;

import java.time.OffsetDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;


/* 
 * Clase intermedia para poder saber que mensajes ha leido un usuario en un chat
 * Dependiendo de la ultima fecha en la que haya visto el chat. (cuando entre se notifica)
 * Y cuando se recibe un mensaje por webSocket si se está en el chat tambien se actualiza
*/
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParticipacionChat implements Transferable<ParticipacionChat.Transfer> {

    @Id
    @ManyToOne
    private User usuario;

    @Id
    @ManyToOne
    private Evento evento;

    private OffsetDateTime ultimaVisita;

    @Getter
    @AllArgsConstructor
    public static class Transfer {
        private long idEvento;
        private String nombreEvento;
        private OffsetDateTime fechaUltimoMensaje;
        private String ultimoMensaje;
        private int mensajesNoLeidos;
    }

    @Override
    public Transfer toTransfer() {
        int mensajesNoLeidos = 0;
        OffsetDateTime fechaUltimo = evento.getFechaCreacion();
        String ultimoMensaje = "Creacion chat";

        for (Mensaje mensaje : evento.getMensajes()) {
            if (mensaje.getFechaEnvio().isAfter(ultimaVisita)) {
                mensajesNoLeidos++;
            }
        }

        if (evento.getMensajes().size() != 0){
            Mensaje mensaje = evento.getMensajes().get(evento.getMensajes().size() - 1);
            fechaUltimo = mensaje.getFechaEnvio();
            ultimoMensaje = mensaje.getContenido();
        }

        return new Transfer(evento.getId(), evento.getNombre(), fechaUltimo, ultimoMensaje, mensajesNoLeidos);
    }
}

public with sharing class SPA {
	public SPA() {

	}

    @RemoteAction
    public static Message myFunction(String msg) {
        return new message(msg + ' from apex');
    }
    @RemoteAction
    public static Message myOtherFunction(String msg) {
        return new message(msg + ' via apex');
    }

    public class message {
        String msg {get;set;}
        public message(String msg){
            this.msg = msg;
        }
    }
}
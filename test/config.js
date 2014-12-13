var $config = {
    jsr: {
        myFunction :'{!$RemoteAction.SPA.myFunction}',
        myOtherFunction :'{!$RemoteAction.SPA.myOtherFunction}'
    },
    baseImg : "{!URLFOR($Resource.spa_sample, '')}",
    mocks :{
        '{!$RemoteAction.SPA.myFunction}' : {
            timeout : 750,
            method : function(args){
                return { msg:  args[1]};
            }
        },
        '{!$RemoteAction.SPA.myOtherFunction}' : {
            timeout : 1000  ,
            method : function(args){
                return { msg:  args[1]};
            }
        }
    }
};
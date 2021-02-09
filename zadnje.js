function izracunaj(f1){
    var niz=Array();
    var n=f1.n.value*1;
    var i,j,pom1="",s=0,pr=0.0,bj=bd=bt=bc=bp=0;
    for(i=0;i<n;i++){
        pom1=prompt("Unesite "+(i+1)+". ocenu.","5")
        f1.unos.value+=" "+pom1;
        niz[i]=pom1*1;
        s=s+niz[i];
        if(niz[i]==5)
        bp++;
        if(niz[i]==4)
        bc++;
        if(niz[i]==3)
        bt++;
        if(niz[i]==2)
        bd++;
        if(niz[i]==1)
        bj++;
    }
    if(f1.zbir.checked)
    f1.zb.value=s;
    if(f1.prosek.checked)
    f1.pr.value=s*1.0/n;
    if((f1.rbo[0].checked)||(f1.rbo[1].checked)||(f1.rbo[2].checked)||(f1.rbo[3].checked)||(f1.rbo[4].checked))
    f2(bj,bd,bt,bc,bp,f1)

    var max=niz[0];
    if(f1.hbo[0].checked){
    for(i=0;i<n;i++){
        if(niz[i]>max){
            max=niz[i];
        }
    }
    f1.naj.value="Max je " +max;
    }
    var min=niz[0];
    if(f1.hbo[1].checked){
    for(i=0;i<n;i++){
        if(niz[i]<min){
            min=niz[i]
        }
    }
    f1.naj.value="Min je " +min;
    }
}
function f2(bj,bd,bt,bc,bp,f1){
    if(f1.rbo[0].checked)
    f1.broj.value="Broj petica je " +bp;
    if(f1.rbo[1].checked)
    f1.broj.value="Broj cetvorki je " +bc;
    if(f1.rbo[2].checked)
    f1.broj.value="Broj trojki je " +bt;
    if(f1.rbo[3].checked)
    f1.broj.value="Broj dvojki je " +bd;
    if(f1.rbo[4].checked)
    f1.broj.value="Broj jedinica je " +bj;
}
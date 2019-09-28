function change(){
    var inp = document.getElementById("input").value;
    var ffc = document.getElementById("firstc").value;
    var ssc = document.getElementById("secondc").value;
    var ffr = document.getElementById("firstr").value;
    var ssr = document.getElementById("secondr").value;
    if(inp == '1'){
        console.log("Reached inside one");
        document.getElementById("one").style.gridColumnStart = ffc;
        document.getElementById("one").style.gridColumnEnd = ssc;
        document.getElementById("one").style.gridRowStart = ffr;
        document.getElementById("one").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 2){
        console.log("Reached inside two");
        document.getElementById("two").style.gridColumnStart = ffc;
        document.getElementById("two").style.gridColumnEnd = ssc;
        document.getElementById("two").style.gridRowStart = ffr;
        document.getElementById("two").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 3){
        console.log("Reached inside third");
        document.getElementById("thi").style.gridColumnStart = ffc;
        document.getElementById("thi").style.gridColumnEnd = ssc;
        document.getElementById("thi").style.gridRowStart = ffr;
        document.getElementById("thi").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 4){
        console.log("Reached inside fourth");
        document.getElementById("fou").style.gridColumnStart = ffc;
        document.getElementById("fou").style.gridColumnEnd = ssc;
        document.getElementById("fou").style.gridRowStart = ffr;
        document.getElementById("fou").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 5){
        console.log("Reached inside fifth");
        document.getElementById("fiv").style.gridColumnStart = ffc;
        document.getElementById("fiv").style.gridColumnEnd = ssc;
        document.getElementById("fiv").style.gridRowStart = ffr;
        document.getElementById("fiv").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);

    }
    else if(inp == 6){
        console.log("Reached inside sixth");
        document.getElementById("six").style.gridColumnStart = ffc;
        document.getElementById("six").style.gridColumnEnd = ssc;
        document.getElementById("six").style.gridRowStart = ffr;
        document.getElementById("six").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 7){
        console.log("Reached inside seventh");
        document.getElementById("sev").style.gridColumnStart = ffc;
        document.getElementById("sev").style.gridColumnEnd = ssc;
        document.getElementById("sev").style.gridRowStart = ffr;
        document.getElementById("sev").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 8){
        console.log("Reached inside eighth");
        document.getElementById("eig").style.gridColumnStart = ffc;
        document.getElementById("eig").style.gridColumnEnd = ssc;
        document.getElementById("eig").style.gridRowStart = ffr;
        document.getElementById("eig").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 9){
        console.log("Reached inside nineth");
        document.getElementById("nin").style.gridColumnStart = ffc;
        document.getElementById("nin").style.gridColumnEnd = ssc;
        document.getElementById("nin").style.gridRowStart = ffr;
        document.getElementById("nin").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    else if(inp == 10){
        console.log("Reached inside tenth");
        document.getElementById("ten").style.gridColumnStart = ffc;
        document.getElementById("ten").style.gridColumnEnd = ssc;
        document.getElementById("ten").style.gridRowStart = ffr;
        document.getElementById("ten").style.gridRowEnd = ssr;
        // document.getElementById("con").style.gridAutoFlow = "row dense";
        console.log(document.getElementById("con").style.gridAutoFlow);
    }
    document.getElementById("input").value = null;
    document.getElementById("firstc").value = null;
    document.getElementById("secondc").value = null;
    document.getElementById("firstr").value = null;
    document.getElementById("secondr").value = null;
}
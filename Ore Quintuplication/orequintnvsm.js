//CHEMISTRY MOD + ORE QUINTUPLICATION COPYRIGHT NVSM 2017 CRETIVE COMMONS 3.0 IF YOU WNT TO USE THIS CODE TO LEARN CODING, BE OK, I'LL LET YOU DO IT :).
//VARIABLES
var hasAcidT1 = false;
var hasEnergyDissolver = false;
//WE'LL FIRST SAY HELLO
function newLevel(){
    clientMessage("Chemistry mod by NVSM. NOT by stupid Youtube channels that like to copy our work! ");
}

//THAN WE'LL DEFINE THE ITEMS
//Tier 1
ModPE.setItem(1000,"h2o",0,"Water Molecule");
ModPE.setItem(1001,"h",0,"Hydrogen");
ModPE.setItem(1002,"o",0,"Oxygen");
ModPE.setItem(1003,"h3o2",0,"Hydrogen-Oxygen Acid");
ModPE.setItem(1004,"capsule",0,"Empty Capsule");
ModPe.setItem(1005,"capsule",1,"Capsule with Hydrogen-Oxygen Acid");
ModPE.setItem(1006,"capsule",2,"Dissolved Iron(Basic)");
ModPE.setItem(1007,"capsule",3,"Dissolved Coal (Basic)");
ModPE.setItem(1008,"powerCell",0,"Redstone Power Cell");
//THAN SOME BLOCKS
//TIER 1
Block.defineBlock(1150,"Dissolver","dissolver",0,false,0);
Block.defineBlock(1151,"Metal Former","metalFormer",0,false,0);

//RECIPING...
//Tier 1
Item.addShapedRecipe(1000,1,0,["000","0b0","000"],["b",325,8]);
Item.addShapedRecipe(1003,5,0,["hhh","0o0","0o0"],["h",1001,0,"o",1002,0]);
Item.addShapedRecipe(1008,3,0,["0i0","rrr","0i0"],["i",265,0,"r",331,0]);
Item.addShapedRecipe(1150,1,0,["iii","ccc","idi"],["i",265,0,"c",1008,0,"d",264,0]);
Item.addShapedRecipe(1151,1,0,["iii","ici","iii"],["i",265,0,"c",1008,0]);

//ON CLICK DO...
function useItem(x,y,z,itemId,blockId,side) { //If click on dissolver with h2o.
    if (itemId === 1000 && blockId === 1150 && hasEnergyDissolver === true) {
        hasEnergyDissolver = false;
        Player.addItemInventory(1000,-1,0);
        Player.addItemInventory(1001,2,0);
        Player.addItemInventory(1002,1,0);
        clientMessage("Reaction Concluded!"); //Add h and o and remove h2o, and say reaction concluded.
    }
    else if (itemId === 1000 && blockId === 1150 && hasEnergyDissolver === false) {
        clientMessage("Power the machine with a power cell first!"); //Say block must be charged
    }
    
}
function useItem(x,y,z,itemId,blockId,side) { //If click on discharged dissolver while holding a power cell Tier 1.
    if (itemId === 1008 && blockId === 1150 && hasEnergyDissolver === false) {
        hasEnergyDissolver = true;
        Player.addItemInventory(1008,-1,0);
        clientMessage("Charged!"); //Charge block, remove cell and say charged.
    }
    else if (itemId === 1008 && blockId === 1150 && hasEnergyDissolver === true) {
        clientMessage("Already Charged!");//Say block is already charged.
    }
}

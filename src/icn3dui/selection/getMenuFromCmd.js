/**
 * @author Jiyao Wang <wangjiy@ncbi.nlm.nih.gov> / https://github.com/ncbi/icn3d
 */

iCn3DUI.prototype.getMenuFromCmd = function (cmd) { var me = this, ic = me.icn3d; "use strict";
    cmd = cmd.trim();

    var seqAnnoStr = 'Windows > View Sequences & Annotations';
    var hbondIntStr = 'Analysis > H-Bonds & Interactions';
    var forceStr = hbondIntStr + ' > 2D Graph (Force-Directed)';
    var rotStr1 = 'View > Rotate > Auto Rotation > Rotate ';
    var rotStr2 = 'View > Rotate > Rotate 90 deg > ';
    var sel3dStr = 'Select > Select on 3D > ';
    var labelStr = 'Analysis > Label > ';
    var printStr = 'File > 3D Printing > ';

    if(cmd.indexOf('load') == 0) return 'File > Retrieve by ID, Align';
    else if(cmd.indexOf('set map') == 0 && cmd.indexOf('set map wireframe') == -1) return 'Style > Electron Density';
    else if(cmd.indexOf('set emmap') == 0 && cmd.indexOf('set emmap wireframe') == -1) return 'Style > EM Density Map';
    else if(cmd.indexOf('set phi') == 0) return 'Analysis > Load Potential > URL (Same Host) Phi/Cube';
    else if(cmd.indexOf('set delphi') == 0) return 'Analysis > DelPhi Potential';
    else if(cmd.indexOf('setoption map') == 0) return 'Style > Remove Map';
    else if(cmd.indexOf('setoption emmap') == 0) return 'Style > Remove EM Map';
    //else if(cmd.indexOf('setoption phimap') == 0) return 'Analysis > Remove Potential';
    else if(cmd.indexOf('view annotations') == 0) return seqAnnoStr;
    else if(cmd.indexOf('set annotation all') == 0) return seqAnnoStr + ': "All" checkbox';
    else if(cmd.indexOf('set annotation clinvar') == 0) return seqAnnoStr + ': "ClinVar" checkbox';
    else if(cmd.indexOf('set annotation snp') == 0) return seqAnnoStr + ': "SNP" checkbox';
    else if(cmd.indexOf('set annotation 3ddomain') == 0) return seqAnnoStr + ': "3D Domains" checkbox';
    else if(cmd.indexOf('view interactions') == 0) return 'Windows > View 2D Diagram';
    else if(cmd.indexOf('symmetry') == 0) return 'Analysis > Symmetry';
    else if(cmd.indexOf('realign on seq align') == 0) return 'File > Realign Selection > on Sequence Alignment';
    else if(cmd.indexOf('realign') == 0) return 'File > Realign Selection > Residue by Residue';
    else if(cmd.indexOf('graph interaction pairs') == 0) return hbondIntStr + ' > 2D Graph (Force-Directed)';
    else if(cmd.indexOf('export canvas') == 0) return 'File > Save Files > iCn3D PNG Image';
    else if(cmd == 'export stl file') return printStr + 'STL';
    else if(cmd == 'export vrml file') return printStr + 'VRML (Color)';
    else if(cmd == 'export stl stabilizer file') return printStr + 'STL W/ Stabilizers';
    else if(cmd == 'export vrml stabilizer file') return printStr + 'VRML (Color, W/ Stabilizers)';
    else if(cmd == 'select all') return 'Select > All; or Toggle to "All" (next to "Help")';
    else if(cmd == 'show all') return 'View > View Full Structure';
    else if(cmd == 'select complement') return 'Select > Inverse';
    else if(cmd == 'set pk atom') return sel3dStr + 'Atom';
    else if(cmd == 'set pk residue') return sel3dStr + 'Residue';
    else if(cmd == 'set pk strand') return sel3dStr + 'Strand/Helix';
    else if(cmd == 'set pk domain') return sel3dStr + '3D Domain';
    else if(cmd == 'set pk chain') return sel3dStr + 'Chain';
    else if(cmd == 'set surface wireframe on') return 'Style > Surface Wireframe > Yes';
    else if(cmd == 'set surface wireframe off') return 'Style > Surface Wireframe > No';
    else if(cmd == 'set map wireframe on') return 'Style > Map Wireframe > Yes';
    else if(cmd == 'set map wireframe off') return 'Style > Map Wireframe > No';
    else if(cmd == 'set emmap wireframe on') return 'Style > EM Map Wireframe > Yes';
    else if(cmd == 'set emmap wireframe off') return 'Style > EM Map Wireframe > No';
    else if(cmd == 'set surface neighbors on') return 'Style > Surface Type > ... with Context';
    //else if(cmd == 'set surface neighbors off') return 'Style > Surface Type > ... without Context';
    else if(cmd == 'set axis on') return 'View > XYZ-axes > Show';
    else if(cmd == 'set axis off') return 'View > XYZ-axes > Hide';
    else if(cmd == 'set fog on') return 'View > Fog for Selection > On';
    else if(cmd == 'set fog off') return 'View > Fog for Selection > Off';
    else if(cmd == 'set slab on') return 'View > Slab for Selection > On';
    else if(cmd == 'set slab off') return 'View > Slab for Selection > Off';
    else if(cmd == 'set assembly on') return 'Analysis > Assembly > Biological Assembly';
    else if(cmd == 'set assembly off') return 'Analysis > Assembly > Asymmetric Unit';
    else if(cmd == 'set chemicalbinding show') return 'Analysis > Chem. Binding > Show';
    else if(cmd == 'set chemicalbinding hide') return 'Analysis > Chem. Binding > Hide';
    else if(cmd == 'set hbonds off' || cmd == 'set salt bridge off' || cmd == 'set contact off'
      || cmd == 'set halogen pi off') return hbondIntStr + ' > Reset';
    else if(cmd == 'hydrogens') return 'Style > Hydrogens > Show';
    else if(cmd == 'set hydrogens off') return 'Style > Hydrogens > Hide';
    else if(cmd == 'set stabilizer off') return 'File > 3D Printing > Remove All Stabilizers';
    else if(cmd == 'set disulfide bonds off') return 'Analysis > Disulfide Bonds > Hide';
    else if(cmd == 'set cross linkage off') return 'Analysis > Cross-Linkages > Hide';
    else if(cmd == 'set lines off') return 'Analysis > Distance > Hide';
    else if(cmd == 'set labels off') return 'Analysis > Label > Remove';
    else if(cmd == 'set mode all') return 'Toggle to "All" (next to "Help")';
    else if(cmd == 'set mode selection') return 'Toggle to "Selection" (next to "Help")';
    else if(cmd == 'set view detailed view') return seqAnnoStr + ': "Details" tab';
    else if(cmd== 'set view overview') return seqAnnoStr + ': "Summary" tab';
    else if(cmd == 'set annotation custom') return seqAnnoStr + ': "Custom" checkbox';
    else if(cmd == 'set annotation interaction') return seqAnnoStr + ': "Interactions" checkbox';
    else if(cmd == 'set annotation cdd') return seqAnnoStr + ': "Conserved Domains" checkbox';
    else if(cmd == 'set annotation site') return seqAnnoStr + ': "Functional Sites" checkbox';
    else if(cmd == 'set annotation ssbond') return seqAnnoStr + ': "Disulfide Bonds" checkbox';
    else if(cmd == 'set annotation crosslink') return seqAnnoStr + ': "Cross-Linkages" checkbox';
    else if(cmd == 'set annotation transmembrane') return seqAnnoStr + ': "Transmembrane" checkbox';
    else if(cmd == 'highlight level up') return 'Keyboard Arrow Up';
    else if(cmd == 'highlight level down') return 'Keyboard Arrow Down';
    else if(cmd.indexOf('hide annotation') == 0) return seqAnnoStr + ': checkboxes off';
    else if(cmd == 'add residue labels') return labelStr + 'per Residue';
    else if(cmd == 'add residue number labels') return labelStr + 'per Residue & Number';
    else if(cmd == 'add atom labels') return labelStr + 'per Atom';
    else if(cmd == 'add chain labels') return labelStr + 'per Chain';
    else if(cmd == 'add terminal labels') return labelStr + 'N- & C- Termini';
    else if(cmd == 'rotate left') return rotStr1 + 'Left; or Key l';
    else if(cmd == 'rotate right') return rotStr1 + 'Right; or Key j';
    else if(cmd == 'rotate up') return rotStr1 + 'Up; or Key i';
    else if(cmd == 'rotate down') return rotStr1 + 'Down; or Key m';
    else if(cmd == 'rotate x') return rotStr2 + 'X-axis';
    else if(cmd == 'rotate y') return rotStr2 + 'Y-axis';
    else if(cmd == 'rotate z') return rotStr2 + 'Z-axis';
    else if(cmd == 'reset') return 'View > Reset > All';
    else if(cmd == 'reset orientation') return 'View > Reset > Orientation';
    else if(cmd == 'reset thickness') return 'File > 3D Printing > Reset Thickness';
    else if(cmd == 'clear selection') return 'Select > Clear Selection';
    else if(cmd == 'zoom selection') return 'Select > Zoom in Selection';
    else if(cmd == 'center selection') return 'Select > Center Selection';
    else if(cmd == 'show selection') return 'Select > View Only Selection';
    else if(cmd == 'hide selection') return 'Select > Hide Selection';
    else if(cmd == 'output selection') return 'Select > Clear Selection';
    else if(cmd == 'toggle highlight') return 'Select > Toggle Highlight';
    else if(cmd == 'stabilizer') return 'File > 3D Printing > Add all Stabilizers';
    else if(cmd == 'disulfide bonds') return 'Analysis > Disulfide Bonds > Show';
    else if(cmd == 'cross linkage') return 'Analysis > Cross-Linkages > Show';
    else if(cmd == 'back') return 'View > Undo';
    else if(cmd == 'forward') return 'View > Redo';
    else if(cmd == 'clear all') return 'Select > Clear Selection';
    else if(cmd == 'defined sets') return 'Windows > Defined Sets';
    else if(cmd == 'delete selected sets') return 'Windows > Defined Sets: "Delete Selected Sets" button';
    else if(cmd == 'view interactions') return 'Windows > View Interactions';
    else if(cmd == 'show annotations all chains') return seqAnnoStr + ': "Show All Chains" button';
    else if(cmd == 'save color') return 'Color > Save Color';
    else if(cmd == 'apply saved color') return 'Color > Apply Saved Color';
    else if(cmd == 'save style') return 'Style > Save Style';
    else if(cmd == 'apply saved style') return 'Style > Apply Saved Style';
    else if(cmd == 'select main chains') return 'Select > Main Chains';
    else if(cmd == 'select side chains') return 'Select > Side Chains';
    else if(cmd == 'select main side chains') return 'Select > Main & Side Chains';
    else if(cmd == 'area') return 'View > Surface Area';
    else if(cmd == 'table inter count only') return hbondIntStr + ': "Set 1" button: "Show Count Only" button';
    else if(cmd == 'table inter details') return hbondIntStr + ': "Set 1" button: "Show Details" button';
    else if(cmd.indexOf('define helix sets') == 0) return seqAnnoStr + ': "Helix Sets" button';
    else if(cmd.indexOf('define sheet sets') == 0) return seqAnnoStr + ': "Sheet Sets" button';
    else if(cmd.indexOf('define coil sets') == 0) return seqAnnoStr + ': "Coil Sets" button';
    else if(cmd.indexOf('select interaction') == 0) return 'Windows > View 2D Diagram: click on edges';
    else if(cmd.indexOf('select saved atoms') == 0 || cmd.indexOf('select sets') == 0) return 'Windows > Defined Sets: select in menu';
    else if(cmd.indexOf('select chain') !== -1) return seqAnnoStr + ': click on chain names';
    else if(cmd.indexOf('select alignChain') !== -1) return 'Windows > View Aligned Sequences: click on chain names';
    else if(cmd.indexOf('select zone cutoff') == 0) return 'Select > by Distance';
    else if(cmd.indexOf('set surface opacity') == 0) return 'Style > Surface Opacity';
    else if(cmd.indexOf('set label scale') == 0) return 'View > Label Scale';
    else if(cmd.indexOf('set surface') == 0) return 'Style > Surface Type';
    else if(cmd.indexOf('set camera') == 0) return 'View > Camera';
    else if(cmd.indexOf('set background') == 0) return 'Style > Background';
    else if(cmd.indexOf('set thickness') == 0) return 'File > 3D Printing > Set Thickness';
    else if(cmd.indexOf('set highlight color') == 0) return 'Select > Highlight Color';
    else if(cmd.indexOf('set highlight style') == 0) return 'Select > Highlight Style';
    else if(cmd.indexOf('add line') == 0) return 'Analysis > Distance > between Two Atoms';
    else if(cmd.indexOf('add label') == 0) return 'Analysis > Distance > between Two Atoms';
    else if(cmd.indexOf('dist') == 0) return 'Analysis > Distance > between Two Sets';
    else if(cmd.indexOf('msa') == 0) return seqAnnoStr + ': "Add Track" button: "FASTA Alignment" button';
    else if(cmd.indexOf('add track') == 0) return seqAnnoStr + ': "Add Track" button';
    else if(cmd.indexOf('remove one stabilizer') == 0) return 'File > 3D Printing > Remove One Stablizer';
    else if(cmd.indexOf('add one stabilizer') == 0) return 'File > 3D Printing > Add One Stablizer';
    else if(cmd.indexOf('select planes z-axis') == 0) return 'View > Select between Two X-Y Planes';
    else if(cmd.indexOf('adjust membrane z-axis') == 0) return 'View > Adjust Membrane';
    else if(cmd.indexOf('toggle membrane') == 0) return 'View > Toggle Membrane';
    else if(cmd.indexOf('calc buried surface') == 0) return hbondIntStr + ': "Buried Surface Area" button';
    else if(cmd.indexOf('display interaction 3d') == 0) return hbondIntStr + ': "3D Display Interactions" button';
    else if(cmd.indexOf('view interaction pairs') == 0) return hbondIntStr + ': "Highlight Interactions in Table" button';
    else if(cmd.indexOf('save1 interaction pairs') == 0) return hbondIntStr + ': "Set 1" button';
    else if(cmd.indexOf('save2 interaction pairs') == 0) return hbondIntStr + ': "Set 2" button';
    else if(cmd.indexOf('line graph interaction pairs') == 0) return hbondIntStr + ': "2D Interaction Network" button';
    else if(cmd.indexOf('scatterplot interaction pairs') == 0) return hbondIntStr + ': "2D Interaction Map" button';
    else if(cmd.indexOf('graph label') == 0) return forceStr + ': "Label Size" menu';
    else if(cmd.indexOf('graph force') == 0) return forceStr + ': "Force on Nodes" menu';
    else if(cmd.indexOf('hide edges') == 0) return forceStr + ': "Internal Edges" menu';
    else if(cmd.indexOf('reset interaction pairs') == 0) return hbondIntStr + ' > Reset';
    else if(cmd.indexOf('side by side') == 0) return 'View > Side by Side';
    else if(cmd.indexOf('your note') == 0) return 'Windows > Your Notes / Window Title';
    else if(cmd.indexOf('pickatom') == 0) return 'Hold Alt key and click on 3D structure';
    else if(cmd.indexOf('color') == 0) return 'Color menu';
    else if(cmd.indexOf('custom tube') == 0) return seqAnnoStr + ': "Custom Color/Tube" button: "Custom Tube" button';
    else if(cmd.indexOf('style') == 0) return 'Style menu';
    else if(cmd.indexOf('select displayed set') !== -1) return 'Select > Displayed Set';
    else if(cmd.indexOf('select prop') !== -1) return 'Select > by Property';
    else if(cmd.indexOf('select') == 0 && cmd.indexOf('name') !== -1) return seqAnnoStr + ': drag on residues to select';
    else if(cmd.indexOf('select $') !== -1 || cmd.indexOf('select .') !== -1 || cmd.indexOf('select :') !== -1 || cmd.indexOf('select @') !== -1) return 'Select > Advanced; or other selection';
    else if(cmd.indexOf('replay on') !== -1) return 'File > Replay Each Step > On';
    else if(cmd.indexOf('replay off') !== -1) return 'File > Replay Each Step > Off';
    else if(cmd.indexOf('set theme') !== -1) return 'Style > Theme Color';
    else if(cmd.indexOf('set double color') !== -1) return 'Style > Two-color Helix';
    else return '';
};
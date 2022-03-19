const nav = document.querySelector('nav');
const btn = document.querySelector('a');

btn.addEventListener('click', function(){
    generatorUl(tableau,tableau[2].list);
})

let tableau =
    [
        {
            titre:'Dashboard',
            className:'Dashboard',
            list:['Dashboard v1','Dashboard v2','Dashboard v3'],
            inconePricipale:'fas fa-tachometer-alt',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'idgets',
            className:'idgets',
            list:[],
            inconePricipale:'nav-icon fas fa-th',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'Layout Options',
            className:'Layout Options',
            list:['Top Navigation','Top Navigation+Sidbar','Boxed','Fixed Sidebar','Fixed Sidebar+custom','Fixed Navbar','Fixed Footer','Collabsed Sidbar'],
            inconePricipale:'nav-icon fas fa-copy',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'Charts',
            className:'Charts',
            list:['Flot','Inline','uPlot'],
            inconePricipale:'nav-icon fas fa-chart-pie',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'ChartsJS',
            className:'ChartsJS',
            list:[],
            inconePricipale:'class="far fa-circle nav-icon',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'Ui Elements',
            className:'Ui Elements',
            list:['General','Icons','Buttons','Sliders','Modls&Alerts','Navbar&Tabs','Tameline','Ribbons'],
            inconePricipale:'nav-icon fas fa-tree',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'Forms',
            className:'Forme',
            list:['General Elements','Advanced Elements','Editors','Validation'],
            inconePricipale:'nav-icon fas fa-edit',
            angleleft:'fa fa-angle-left',
            angledown:'fa fa-angle-down'
        },
        {
            titre:'Tables',
            className:'Tables',
            list:['Simples Tables','DataTables','JsGrid'],
            inconePricipale:'nav-icon fas fa-table',
            angleleft:'fa fa-angle-left',
                angledown:'fa fa-angle-down'
            }
    ]
function generatorUl(array,inconePricipale){
    for (let i = 0; i < array.length; i++) {
        let divicone = document.createElement('div');
        let divul = document.createElement('div');
        let divsoulist = document.createElement('div');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let icone = document.createElement('i');
        let divnav =document.createElement('div');

        divnav.setAttribute('class', 'divnav')
        divicone.setAttribute('class','divicone');
        divul.setAttribute('class','divul');
        divsoulist.setAttribute('class','divsoulist');
        ul.setAttribute('class','divul');
        icone.setAttribute('class',array[i].inconePricipale);
        // divicone.innerHTML=array[i].inconePricipale;
        li .innerHTML=array[i].titre;
        divsoulist.innerHTML=array[i].angleleft;
        divicone.appendChild(icone);
        ul.appendChild(li);
        divul.appendChild(ul);

        divnav.appendChild(divicone);
        divnav.appendChild(divul)
        divnav.appendChild(divsoulist)
        nav.appendChild(divnav);

    }
}
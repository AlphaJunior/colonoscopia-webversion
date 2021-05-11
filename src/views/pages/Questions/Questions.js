import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CPagination,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CListGroup,
  CListGroupItem,
  CCardFooter,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CDropdown,
  CLabel,
  CSelect,
  CSwitch,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { DocsLink } from '../../reusable/index'

const Questions = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)
  

  return (
    <CContainer>
      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>Dúvidas cadastradas</CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>E se eu não fizer a colonoscopia? O que pode acontecer comigo?</CListGroupItem>
                <CListGroupItem>Há alguma dieta que previna o câncer intestinal?</CListGroupItem>
                <CListGroupItem>Qual o benefício o paciente terá ao fazer a colonoscopia?</CListGroupItem>
                <CListGroupItem>Minha mãe fez a colono e veio um resultado de pólipo. O que quer dizer?</CListGroupItem>
                <CListGroupItem>Hoje em dia, há muitos diagnósticos de alterações intestinais. Como posso prevenir isso?</CListGroupItem>
                <CListGroupItem>Caso eu faça a colonoscopia, há algum preparo?</CListGroupItem>
                <CListGroupItem>Até que idade pode ser feita a colonoscopia?</CListGroupItem>
                <CListGroupItem>E se meu exame tiver alguma alteração, o que fazer?</CListGroupItem>
                <CListGroupItem>Porque eu devo realizar a colonoscopia se não tenho nenhuma sintoma e nem história de câncer na família?</CListGroupItem>
                <CListGroupItem>Eu tenho um parente que teve câncer de intestino e tenho menos de 45 anos de idade. À partir de que idade devo começar a me prevenir?</CListGroupItem>
                <CListGroupItem>Mesmo que o meu exame esteja normal, eu precisarei repeti-lo depois, sendo que eu não tenho histórico na família?</CListGroupItem>
                </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>Respostas Enviadas</CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>Você poderá ter câncer de intestino, pois se havia lesões benignas e elas não forem visualizadas e retiradas a tempo, elas podem crescer, virar malignas (câncer) e se espalharem para outros órgãos, o que chamamos de metástases, diminuindo muito a chance de cura e aumentando o risco de sequelas ou morte.</CListGroupItem>
                <CListGroupItem>Sabemos hoje em dia que a dieta ideal é rica em legumes, verduras e frutas e pobre em embutidos (salame, linguiça, salsicha, bacon, mortadela, presunto), excesso de carnes vermelhas e churrascos.</CListGroupItem>
                <CListGroupItem>Além do diagnóstico mais exato das doenças intestinais, que permite o início do tratamento e muitas vezes a cura (em caso de pacientes sintomáticos), a colonoscopia permite a retirada de lesões benignas na parede do intestino, impedindo que as mesmas virem câncer no futuro. Mesmo quem não tem nenhum sintoma deve realizar o exame, pois os cânceres intestinais têm crescimento lento e podem chegar a estágios avançados, até espalhados pelo corpo, gerando pouco ou nenhum sintoma.</CListGroupItem>
                <CListGroupItem>Pólipos são lesões decorrentes de um crescimento anormal de uma área da parede intestinal, gerando nodulações na mesma e alteração sua estruta. Alguns pólipos são de fato benignos e não virariam câncer, porém outros se tratam de lesões pré cancerosas, que podem malignizar com o passar dos anos. Apesar de terem algumas características que os diferenciam, o único exame que permite a certeza dessa característica maligna ou benigna do pólipo é a anatomia patológica, a popular biópsia. Por esse motivo, sempre que um pólipo é visualizado no intestino, ele é retirado por completo ou um pedaço para essa avaliação. Isso é o que vai definir a conduta daí em diante –se a pessoa já estar curada, se será necessária cirurgia ou apenas um acompanhamento com colonoscopia de tempos em tempos.</CListGroupItem>
                <CListGroupItem>Você pode prevenir essas doenças, inclusive o câncer, através da adoção de um estilo de vida saudável, praticando atividades físicas, parando de fumar e optando por uma dieta mais saudável. Algumas doenças vão exigir tratamento medicamentoso ou cirúrgico – procure um proctologista para que ele avalie se esse é o seu caso.</CListGroupItem>
                <CListGroupItem>O exame se trata da introdução pelo ânus de um tubo fino, flexível, com uma câmera na ponta, que permite a visualização de toda a parede intestinal. Não se preocupe. O exame é feito sob anestesia, não gerando qualquer desconforto durante o mesmo. Após o exame, pode ocorrer, em alguns casos, certo desconforto abdominal devido à insuflação de gases que distendem o intestino permitindo melhor avaliação. A própria eliminação dos gases pelo ânus já promove melhora importante desse desconforto. Por necessitar de avaliação através de uma câmera, é necessário que o intestino esteja limpo e sem fezes para que as mesmas não sujem e impeçam que vejamos claramente a imagem. Por isso, na véspera do exame, você deverá fazer uma dieta mais líquida, evitar certos alimentos e tomar alguns laxantes.</CListGroupItem>
                <CListGroupItem>A idade não é contra indicação para o exame, ou seja, a colonoscopia pode ser feita em qualquer idade desde que respeitada as indicações e contra indicações do exame. À partir dos 85 anos, a indicação do exame deve contemplar a possibilidade de benefício para o paciente, considerando seus problemas de saúde e risco cardíaco em se fazer um exame sob anestesia.</CListGroupItem>
                <CListGroupItem>Depende do tipo de alteração. Inflamações no intestino podem configurar doenças crônicas chamadas doenças inflamatórias intestinais (doença de crohn e retocolite ulcerativa), que exigem tratamento com medicações e acompanhamento, pois têm controle e não cura. Há também alterações decorrentes de diminuição de oxigenação das células- colites isquêmicas – ou de infecções por vermes, bactérios, fungos ou vírus. Nesses casos, há tratamentos específicos, que devem ser individualizados pelo seu médico. Quando a alteração é um pólipo, ele, na maioria das vezes, é ressecado por completo durante o exame, fazendo que com a pessoa já saia do exame curada, devendo repetir o mesmo dentro de algum tempo para prevenção. Agora, se houver câncer no intestino, o tratamento depende do estágio em que o mesmo se encontra, da localização e do tipo de tumor que foi encontrado. Na maioria das vezes o tratamento envolve cirurgia, mas pode requerer também quimioterapia ou radioterapia complementares.</CListGroupItem>
                <CListGroupItem>A colonoscopia é o exame atualmente mais eficaz para prevenir o câncer do intestino. Através dele, podemos identificar e retirar muitas lesões inicialmente benignas, chamadas pólipos, que são como caroços que surgem na parede do intestino e que, se não retirados, crescem e viram câncer intestinal. Sabemos que o câncer do intestino é a segunda causa mais comum de câncer nas mulheres em nosso país e a terceira nos homens. É tratável e, na maioria dos casos, curável, ao ser detectado precocemente, quando ainda não se espalhou para outros órgãos. Sabe-se que 36.360 novos casos desse tipo de câncer surgiram no país em 2018 e ocorreram cerca de 16.697 mortes decorrentes dessa doença. A grande maioria dessas mortes poderiam ter sido evitadas se o paciente tivesse feito o exame de colonoscopia precocemente.</CListGroupItem>
                <CListGroupItem>Em pacientes que têm parentes de primeiro grau com diagnóstico de tumor intestinal, a prevenção com colonoscopia começa mais cedo. Ela deve se iniciar aos 40 anos ou 10 anos antes do parente mais jovem que teve o câncer (o que vier primeiro).</CListGroupItem>
                <CListGroupItem>Sim. Todos os exames de prevenção de câncer devem ser feitos de tempos em tempos. As prevenções existentes são, em geral, anuais – mamografia, Papanicolau (preventivo do útero), próstata. Por se tratar de um tumor mais lento e cujo exame permite ressecção e não só visualização de lesões, a colonoscopia pode ser repetida em até 10 anos, a depender do caso e dos achados durante o exame.</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Cadastrar pergunta e resposta
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-email">Pergunta</CLabel>
                  <CInput type="email" id="nf-email" name="nf-email" placeholder="Pergunta" autoComplete="email"/>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-password">Resposta</CLabel>
                  <CInput type="password" id="nf-password" name="nf-password" placeholder="Resposta" autoComplete="current-password"/>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Enviar</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Apagar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </CContainer>
  
  
  );
};

export default Questions;

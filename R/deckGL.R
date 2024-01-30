# AUTO GENERATED FILE - DO NOT EDIT

#' @export
deckGL <- function(id=NULL, clickEvent=NULL, clickInfo=NULL, data=NULL, disableContext=NULL, dragEndEvent=NULL, dragEndInfo=NULL, dragStartEvent=NULL, dragStartInfo=NULL, enableEvents=NULL, hoverEvent=NULL, hoverInfo=NULL, mapboxKey=NULL, style=NULL, tooltip=NULL) {
    
    props <- list(id=id, clickEvent=clickEvent, clickInfo=clickInfo, data=data, disableContext=disableContext, dragEndEvent=dragEndEvent, dragEndInfo=dragEndInfo, dragStartEvent=dragStartEvent, dragStartInfo=dragStartInfo, enableEvents=enableEvents, hoverEvent=hoverEvent, hoverInfo=hoverInfo, mapboxKey=mapboxKey, style=style, tooltip=tooltip)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DeckGL',
        namespace = 'dash_deck',
        propNames = c('id', 'clickEvent', 'clickInfo', 'data', 'disableContext', 'dragEndEvent', 'dragEndInfo', 'dragStartEvent', 'dragStartInfo', 'enableEvents', 'hoverEvent', 'hoverInfo', 'mapboxKey', 'style', 'tooltip'),
        package = 'dashDeck'
        )

    structure(component, class = c('dash_component', 'list'))
}

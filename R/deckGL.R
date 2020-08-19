# AUTO GENERATED FILE - DO NOT EDIT

deckGL <- function(data=NULL, id=NULL, mapboxKey=NULL, clickEvent=NULL, clickInfo=NULL, hoverEvent=NULL, hoverInfo=NULL, dragStartEvent=NULL, dragStartInfo=NULL, dragEndEvent=NULL, dragEndInfo=NULL) {
    
    props <- list(data=data, id=id, mapboxKey=mapboxKey, clickEvent=clickEvent, clickInfo=clickInfo, hoverEvent=hoverEvent, hoverInfo=hoverInfo, dragStartEvent=dragStartEvent, dragStartInfo=dragStartInfo, dragEndEvent=dragEndEvent, dragEndInfo=dragEndInfo)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DeckGL',
        namespace = 'dash_deck',
        propNames = c('data', 'id', 'mapboxKey', 'clickEvent', 'clickInfo', 'hoverEvent', 'hoverInfo', 'dragStartEvent', 'dragStartInfo', 'dragEndEvent', 'dragEndInfo'),
        package = 'dashDeck'
        )

    structure(component, class = c('dash_component', 'list'))
}
